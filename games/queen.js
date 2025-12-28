const createBoard = (n) => Array.from({ length: n }, () => Array(n).fill(0));
const printBoard = (board) => {
  console.clear();
  board.forEach((row) => {
    const r = row.map((c) => (c ? "Q" : ".")).join(" ");
    console.log(r);
  });
  console.log("\n");
};

const getMoveInput = () => {
  const input = prompt(
    `Place queen  - row,col: `,
  );
  return input.split(",").map((x) => parseInt(x));
};

const isColSafe = (board, col) =>
  col >= 0 && col < board.length && !board.map((r) => r[col]).includes(1);

const isRowSafe = (board, row) =>
  row >= 0 && row < board.length && !board[row].includes(1);

const isInLimit = (board, row, col) =>
  row >= 0 && row < board.length && col >= 0 && col < board.length;

const isAdjacentDiagonalSafe = (board, row, col) => {
  const directions = [
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1],
  ];
  return directions.every(([dr, dc]) => {
    const r = row + dr;
    const c = col + dc;
    if (!isInLimit(board, r, c)) return true;

    return board[r][c] !== 1;
  });
};
const isSafe = (board, row, col) =>
  isRowSafe(board, row) && isColSafe(board, col) &&
  isAdjacentDiagonalSafe(board, row, col);

const getUserMove = (board) => {
  while (true) {
    const move = getMoveInput();
    const [row, col] = move;
    if (isSafe(board, row, col)) return [row, col];
    console.log("Invalid move! Try again.");
  }
};

const playQueenGame = (n) => {
  const board = createBoard(n);
  let queensPlaced = 0;
  while (queensPlaced < n) {
    printBoard(board);
    const [row, col] = getUserMove(board);
    board[row][col] = 1;
    queensPlaced++;
  }
  printBoard(board);
  console.log("All Queens are placed");
};
playQueenGame(5);
