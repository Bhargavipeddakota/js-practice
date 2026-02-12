import { equal } from "jsr:@std/assert";

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

const isValidStartIndexes = ({ start, end }, x, y) =>
  (x === start.x && y === start.y) ||
  (x === end.x && y === end.y);
  
const validatePath = async (path, pair) => {
  const endPoint = path[0];

  const reachedEnd = endPoint.x === pair.end.x &&
    endPoint.y === pair.end.y;

  if (!reachedEnd) {
    for (const { x, y } of path) {
      if (!isValidStartIndexes(pair, x, y)) {
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



const findPairAtPoint = (pairs, x, y) =>
  pairs.find((p) => isValidStartIndexes(p, x, y));

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
        console.log({xOffset,yOffset})
        const pair = findPairAtPoint(pairs, xOffset, yOffset);
        if (!pair) continue;

        await pathDetails(pair);
      }
    }
  } finally {
    Deno.stdin.setRaw(false);
    reader.releaseLock();
    writer.releaseLock();
  }
};

const pairs = [
  { color: `${ESC}[44m ${ESC}[0m`, start: { x: 10, y: 10 }, end: { x: 20, y: 20 } },
  { color: `${ESC}[41m ${ESC}[0m`, start: { x: 30, y: 10 }, end: { x: 40, y: 20 } },
  { color: `${ESC}[43m ${ESC}[0m`, start: { x: 15, y: 31 }, end: { x: 50, y: 31 } },
];

await main(pairs);
