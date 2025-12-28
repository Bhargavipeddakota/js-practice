import { chunk } from "jsr:@std/collections";
function rolldice() {
  return Math.floor(Math.random() * 6) + 1;
}
const board = Array.from({ length: 100 }, (_, i) => 100 - i);
const SNAKES = {
  99: 54,
  93: 67,
  87: 54,
  70: 55,
  52: 42,
  59: 38,
  48: 16,
  28: 10,
};

const LADDERS = {
  9: 27,
  18: 37,
  25: 54,
  33: 51,
  56: 64,
  68: 88,
  76: 97,
  79: 100,
};
const CELL_SYMBOLS = {
  both: "🤝",
  p1: "1️⃣",
  p2: "2️⃣",
  finish: "🏁",
  ladder: "🪜",
  snake: "🐍",
};
const CELL_CHECKS = {
  both: (n, p) => p[0] === n && p[1] === n,
  p1: (n, p) => p[0] === n,
  p2: (n, p) => p[1] === n,
  finish: (n) => n === 100,
  ladder: (n) => n in LADDERS,
  snake: (n) => n in SNAKES,
};

function getCellSymbol(number, positions) {
  for (const key in CELL_CHECKS) {
    if (CELL_CHECKS[key](number, positions)) {
      return CELL_SYMBOLS[key];
    }
  }
  return number.toString();
}

const drawBoard = (board, positions) => {
  console.clear();
  const rows = chunk(board, 10);
  const output = rows.map(
    (r, i) => {
      const displayRow = (i % 2 === 0) ? r : r.reverse();
      return displayRow.map((cell) =>
        getCellSymbol(cell, positions).padStart(3, " ")
      ).join(" ");
    },
  ).join("\n");
  console.log(output);
};

function getPlayerDetalis() {
  const players = [];
  players[0] = prompt("enter player1 name");
  players[1] = prompt("enter player2 name");
  const positions = [1, 1];
  return [players, positions];
}
function checkSnakeOrLadder(position) {
  return SNAKES[position] || LADDERS[position] || position;
}

function hasWon(positions, turn) {
  return positions[turn] === 100;
}

function getPosition(positions, index, players) {
  prompt(`press Enter to rollDice ${players[index]}`);
  let newPos = positions[index] + rolldice();
  if (newPos > 100) {
    return positions[index] = positions[index];
  }
  positions[index] = checkSnakeOrLadder(newPos);
}

function composeWinMessage(players, turn) {
  console.log(`${players[turn]}  🏆 Win The Game`);
}

function showMsg(positions, players, turn) {
  console.log("-".repeat(20));
  console.log(`\n ${players[turn]} \n position : ${positions[turn]}\n`);
  console.log("-".repeat(20));
}

function playGame() {
  const data = getPlayerDetalis();
  let players = data[0];
  let positions = data[1];
  let turn = 0;
  while (true) {
    if (hasWon(positions, turn)) {
      return composeWinMessage(players, turn);
    }
    drawBoard(board, positions);
    getPosition(positions, turn, players);
    showMsg(positions, players, turn);
    turn = (turn + 1) % 2;
  }
}

playGame();
