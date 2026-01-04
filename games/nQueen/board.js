import{isSafe} from "./validation.js"
export const createBoard = (n) => Array.from({ length: n }, () => Array(n).fill(0));

const getColumnHeader = (n) => {
  let header = "   ";
  for (let c = 0; c < n; c++) header += ` ${c}  `;
  return header;
};
const getBorderLine = (length, left,junction, right) => {
  const cell = "─".repeat(3);
  return "   " + left + Array(length - 1).fill(cell + junction).join("") + cell + right;
};
const borders = {
  top:    (length) => getBorderLine(length, "┌", "┬", "┐"),
  middle: (length) => getBorderLine(length, "├", "┼", "┤"),
  bottom: (length) => getBorderLine(length, "└", "┴", "┘"),
};

const cellTypes = {
  queen: {
    symbol: "Q",
    style: "color: red; font-weight: bold;",
  },
  unsafe: {
    symbol: "x",
    style: "color: rgba(255, 187, 71, 1);",
  },
  safe: {
    symbol: " ",
    style: "color: deepgreen;",
  },
};

const getCellType = (cell, board, row, col) => {
  if (cell) return "queen";
  if (!isSafe(board, row, col)) return "unsafe";
  return "safe";
};

export const getRowString = (rowIndex, row, board) => {
  let rowStr = `${rowIndex}  │`;
  const styles = [];

  row.forEach((cell, colIndex) => {
    const type = getCellType(cell, board, rowIndex, colIndex);
    const { symbol, style } = cellTypes[type];
    rowStr += `%c${symbol}  │`;
    styles.push(style);
  });

  console.log(rowStr, ...styles);
}

export const printBoard = (board) => {
  console.clear();
  const n = board.length;
  console.log("%c    N-Queens Game 👑!   ","color:pink")
  console.log(getColumnHeader(n));
  console.log(borders.top(n));

  for (let r = 0; r < n; r++) {
    getRowString(r, board[r], board);
    console.log(r < n - 1 ? borders.middle(n) : borders.bottom(n));
  }
};
