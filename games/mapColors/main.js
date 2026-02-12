const writer = Deno.stdout.writable.getWriter();
const reader = Deno.stdin.readable.getReader();
const encoder = new TextEncoder();

const ESC = "\x1b";
const MOUSE_ENABLE = `${ESC}[?1002h`;

const black = `${ESC}[40m ${ESC}[0m`;

const enableMouse = () => writer.write(encoder.encode(MOUSE_ENABLE));

const enableRawMode = () => Deno.stdin.setRaw(true, { cbreak: true });

const moveCursor = (x, y) => writer.write(encoder.encode(`${ESC}[${y};${x}H`));

const draw = async (x, y, color) => {
  await moveCursor(x, y);
  await writer.write(encoder.encode(color));
};

const parseMouse = (value) => {
  const [, , , mode, x, y] = value;
  return {
    modeType: mode - 32,
    xOffset: x - 32,
    yOffset: y - 32,
  };
};

const isPoint = (x, y) => {
  const result = pairs.some((c) =>
    (c.start.x === x && c.start.y === y) || (c.end.x === x && c.end.y === y)
  );
  return result;
};

const isValidStartIndexes = ({ start, end }, x, y) =>
  (x === start.x && y === start.y) ||
  (x === end.x && y === end.y);

const validatePath = async (path, pair) => {
  const { x, y } = path[0];

  const reachedEnd = (x === pair.end.x && y === pair.end.y) ||
    (pair.start.x && y === pair.start.y);

  if (!reachedEnd) {
    for (const { x, y } of path) {
      if ( !isValidStartIndexes(pair, x, y)) {
        await draw(x, y, black);
      }
    }
  }
};

const pathDetails = async (pair) => {
  const path = [];

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;

    const data = parseMouse(value);
    if (!data) continue;

    const { modeType, xOffset, yOffset } = data;
    path.unshift({ x: xOffset, y: yOffset });

    if (modeType === 3) {
      await validatePath(path, pair);
      break;
    }
    await draw(xOffset, yOffset, pair.color);
  }
};

const drawInitialPoints = async () => {
  for (const p of pairs) {
    await draw(p.start.x, p.start.y, p.color);
    await draw(p.end.x, p.end.y, p.color);
  }
};

const findPairAtPoint = (pairs, x, y) => {
  const result = pairs.find((p) => isValidStartIndexes(p, x, y));
  return result;
};

const main = async (pairs) => {
  enableRawMode();
  await enableMouse();
  await drawInitialPoints();
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      const data = parseMouse(value);
      // if (!data) continue;

      const { modeType, xOffset, yOffset } = data;
      if (modeType === 0) {
        const pair = findPairAtPoint(pairs, xOffset, yOffset);
        if (!pair) continue;

        await pathDetails(pair);
        await drawInitialPoints();
      }
    }
  } finally {
    Deno.stdin.setRaw(false);
    reader.releaseLock();
    writer.releaseLock();
  }
};

const random = (n) => Math.floor(Math.random() * n);

const generateColors = () => {
  const pairs = [];
  for (let i = 0; i < 4; i++) {
    // const color = random(7)  + 41;
    const color = `${ESC}[${random(7)  + 41}m ${ESC}[0m`
    const start = {x:random(40)+5 , y:random(40)+ 5};
    const end = {x:random(40)+5 ,y:random(30)+ 5};
    pairs.push({color,start,end})
  }
  return pairs;
}
// const pairs = [
//   {
//     color: `${ESC}[44m ${ESC}[0m`,
//     start: { x: 10, y: 10 },
//     end: { x: 20, y: 20 },
//   },
//   {
//     color: `${ESC}[41m ${ESC}[0m`,
//     start: { x: 30, y: 10 },
//     end: { x: 40, y: 20 },
//   },
//   {
//     color: `${ESC}[43m ${ESC}[0m`,
//     start: { x: 15, y: 31 },
//     end: { x: 50, y: 25 },
//   },
//   {
//     color: `${ESC}[42m ${ESC}[0m`,
//     start: { x: 20, y: 25 },
//     end: { x: 12, y: 10 },
//   },
//   {
//     color: `${ESC}[45m ${ESC}[0m`,
//     start: { x: 70, y: 31 },
//     end: { x: 50, y: 31 },
//   },

// ];
const pairs = generateColors();
// console.log("--->",pairs)
await main(pairs);
