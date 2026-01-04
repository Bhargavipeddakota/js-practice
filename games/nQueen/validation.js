const DIRECTIONS = [
  [-1, -1], [-1, 1],
  [1, -1],  [1, 1],
];

const isInLimit = (board, row, col) =>
  row >= 0 && row < board.length &&
  col >= 0 && col < board.length;

const isRowSafe = (board, row) => !board[row].includes(1);

const isColSafe = (board, col) => !board.map(r => r[col]).includes(1);

const isAdjacentDiagonalSafe = (board, row, col) =>
  DIRECTIONS.every(([dr, dc]) => {
    const r = row + dr;
    const c = col + dc;
    return !isInLimit(board, r, c) || board[r][c] !== 1;
  });

export const isSafe = (board, row, col) =>
  isInLimit(board, row, col) &&
  isRowSafe(board, row) &&
  isColSafe(board, col) &&
  isAdjacentDiagonalSafe(board, row, col);


export const isValidPlace = (board, row, col) =>
  isSafe(board, row, col) && board[row][col] === 0;

export const isValidRemove = (board, row, col) =>
  isInLimit(board, row, col) && board[row][col] === 1;
