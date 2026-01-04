import { isValidPlace, isValidRemove } from "./validation.js";
import { getMoveInput, parseMove } from "./input.js";

const createBoard = (n) => Array.from({ length: n }, () => Array(n).fill(0));

const printBoard = (board) => {
  console.clear();
  board.forEach((row) =>
    console.log(row.map(c => (c ? "Q" : ".")).join(" "))
  );
  console.log("\n");
};

const moves = {
  place: {
    isValid: (board, row, col) => isValidPlace(board,row,col),
    apply: (board, row, col) => { board[row][col] = 1;return 1},
  },
  remove: {
    isValid: (board, row, col) =>  isValidRemove(board,row,col),
    apply: (board, row, col) => { board[row][col] = 0; return -1},
  },
};

const handleMove = (board, { type, row, col }) => {
  const move = moves[type];
  if (!move.isValid(board, row, col)) {
    console.log("Invalid move!");
    return 0;
  }
  return move.apply(board, row, col);
};

const playQueenGame = (n) => {
  const board = createBoard(n);
  let queensPlaced = 0;
  while (queensPlaced < n) {
    printBoard(board);
    const move = parseMove(getMoveInput());
    queensPlaced += handleMove(board, move);
  }
  printBoard(board);
  console.log("All Queens are placed");
};

playQueenGame(5);


