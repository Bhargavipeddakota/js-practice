import { isValidPlace, isValidRemove } from "./validation.js";
import { getMoveInput, parseMove } from "./input.js";
import {createBoard,printBoard} from "./board.js"

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
    return { delta: 0, message: "Invalid move!" };
  }
  return { delta: move.apply(board, row, col), message: null };
};


const playQueenGame = (n) => {
  const board = createBoard(n);
  let queensPlaced = 0;
  const maxQueens = n === 2 || n === 3 ? n - 1 : n;
 printBoard(board);
  while (queensPlaced < maxQueens) {
  const move = parseMove(getMoveInput());
  const result = handleMove(board, move);
    printBoard(board);
  if (result.message) {
    console.log(result.message); 
  }
  queensPlaced += result.delta;
}
  printBoard(board);
  console.log("All Queens are placed");
};

playQueenGame(10);


