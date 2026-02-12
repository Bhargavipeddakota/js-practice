const DIRECTIONS = [
  [-1, -1],
  [-1,  1],
  [ 1, -1],
  [ 1,  1],
];

const createBoard = (n) => Array.from({ length: n }, () => Array(n).fill(0));

const printBoard = (board) => {
  console.clear();
  board.forEach((row) =>
    console.log(row.map(c => (c ? "Q" : ".")).join(" "))
  );
  console.log("\n");
};

const getMoveInput = () =>
  prompt("Place queen - row,col:").split(",").map(Number);

const isInLimit = (board, row, col) =>
  row >= 0 && row < board.length && col >= 0 && col < board.length;
const isRowSafe = (board, row) =>
  !board[row].includes(1);

const isColSafe = (board, col) =>
  !board.map(r => r[col]).includes(1);

const isAdjacentDiagonalSafe = (board, row, col) =>
  DIRECTIONS.every(([dr, dc]) => {
    const r = row + dr;
    const c = col + dc;
    return !isInLimit(board, r, c) || board[r][c] !== 1;
  });

const isSafe = (board, row, col) =>
  isInLimit(board, row, col) &&
  isRowSafe(board, row) &&
  isColSafe(board, col) &&
  isAdjacentDiagonalSafe(board, row, col);

const isValidPlaceMove = (board, row, col) =>
  isInLimit(board, row, col) &&
  board[row][col] === 0 &&
  isSafe(board, row, col);

const isValidRemoveMove = (board, row, col) =>
  isInLimit(board, row, col) &&
  board[row][col] === 1;
const handleMove = (board, move) => {
  const { type, row, col } = move;

  if (type === "place" && isValidPlaceMove(board, row, col)) {
    return move;
  }

  if (type === "remove" && isValidRemoveMove(board, row, col)) {
    return move;
  }

  return null;
};
const parseMove = (input) => {
  if (input.startsWith("r")) {
    const [row, col] = input.slice(1).trim().split(",").map(Number);
    return { type: "remove", row, col };
  }

  const [row, col] = input.split(",").map(Number);
  return { type: "place", row, col };
};

const getUserMove = (board) => {
  while (true) {
    const input = getMoveInput();
    const move = parseMove(input);
    const validMove = handleMove(board, move);

    if (validMove) return validMove;

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

playQueenGame(3);
