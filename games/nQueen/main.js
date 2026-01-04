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
    console.log(`%c${result.message}`,"color:red"); 
  }
  queensPlaced += result.delta;
}
  printBoard(board);
  console.log("%cAll Queens are placed","color:pink");
};

const startGame = () => {
  console.clear();
  console.log("%c     ---Welcome to the N-Queens Game! 👑---", "color: yellow; font-weight: bold;");
  console.log("You will place queens (Q) on the board.");
  console.log("Unsafe positions are marked with 'x'.\n");

  let n = parseInt(prompt("Enter the board size (N x N):"));
  while (isNaN(n) || n < 2) {
    n = parseInt(prompt("Invalid input! Enter a number >= 2:"));
  }

  playQueenGame(n);
};
startGame();

