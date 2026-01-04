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

const getRowString = (rowIndex, row) => {
  let rowStr = `${rowIndex}  │`;
  for (const cell of row) rowStr += ` ${cell ? "Q" : "."} │`;
  return rowStr;
};

export const printBoard = (board) => {
  console.clear();
  const n = board.length;

  console.log(getColumnHeader(n));
  console.log(borders["top"](n));

  for (let r = 0; r < n; r++) {
    console.log(getRowString(r, board[r]));
    console.log(r < n - 1 ? borders["middle"](n) : borders["bottom"](n));
  }
};
