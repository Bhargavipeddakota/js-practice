// import { mapToBoard, parseValue, printBoard } from "./othello.js";

const connection = await Deno.connect({
  hostname: "10.132.124.156",
  port: 7000,
  transport: "tcp",
});

let myColor;
let currentTurn;

const encoder = new TextEncoder();
const decoder = new TextDecoder();
const buffer = new Uint8Array(1024);

const writer = Deno.stdout.writable.getWriter();
const reader = Deno.stdin.readable.getReader();

Deno.stdin.setRaw(true, { cbreak: true });
await writer.write(encoder.encode("\x1b[?25l"));
await writer.write(encoder.encode("\x1b[?1000h"));

export const printBoard = (board, currentColor) => {
  console.clear();
  let op = "";
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      op += board[i][j] + " ";
    }
    op += "\n";
  }
  // op += ` TURN:${currentColor} your color:${playerColor}`;
  console.log(op);
};

export const parseValue = (value) => {
  const button = value[3] - 32;
  const x = value[4] - 32;
  const y = value[5] - 32;
  return { button, x, y };
};

export const inBounds = (x, y) => {
  return x >= 0 && x < 8 && y >= 0 && y < 8;
};

export const mapToBoard = (x, y) => {
  const boardX = Math.floor((x - 1) / 3);
  const boardY = y - 1;
  if (!inBounds(boardX, boardY)) return null;
  return [boardX, boardY];
};
const readFromServer = async () => {
  while (true) {
    const n = await connection.read(buffer);
    if (n === null) break;
    const res = JSON.parse(decoder.decode(buffer.slice(0, n)));
    if (res.type === "assign") {
      myColor = res.color;
      console.log("yor color is:", myColor);
    }
    if (res.type === "normal") {
      currentTurn = res.currentColor;
      printBoard(res.board, res.currentColor);
      if (myColor !== currentTurn) {
        console.log("\nwaiting for opponent to move...");
      } else {
        console.log("\nYOUR TURN");
      }

      console.log(n);
      if (res.gameOver) {
        console.log("winner is:", res.score);
        connection.close();
        break;
      }
    } else {
      console.log(res.turn);
    }
  }
};

readFromServer();

try {
  while (true) {
    const { value } = await reader.read();
    if (!value) continue;

    const org = parseValue(value);
    if (org.button !== 0) continue;

    const coOrdinates = mapToBoard(org.x, org.y);
    if (!coOrdinates) continue;

    const [boardX, boardY] = coOrdinates;
    await connection.write(encoder.encode(JSON.stringify({ boardX, boardY })));
  }
} finally {
  await writer.write(encoder.encode("\x1b[?25h"));
  await writer.write(encoder.encode("\x1b[?1000l"));
  Deno.stdin.setRaw(false);
}
