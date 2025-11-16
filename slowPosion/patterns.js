const generateLine = (columns, char, row) => {
  return char[row % char.length].repeat(columns);
};

const generateHollowLine = (columns, char) => {
  return char + " ".repeat(columns - 2) + char;
};

const filledRectangle = (rows, columns) => {
  const pattern = [];
  const char = "*";
  for (let row = 1; row <= rows; row++) {
    pattern.push(generateLine(columns, char, row));
  }
  return pattern.join("/n");
};

const hollowRectangle = (rows, columns) => {
  const pattern = [];
  const char = "*";
  if (columns === 1) {
    return ("*\n").repeat(rows).trim();
  }
  pattern.push(generateLine(columns, char, 1));
  for (let i = 2; i < rows; i++) {
    pattern.push(generateHollowLine(columns, char, i));
  }
  pattern.push(generateLine(columns, char, rows));
  return pattern.join("/n");
};

const alternatingRectangle = (rows, columns,char) => {
  const pattern = [];
  for (let index = 0; index < rows; index++) {
    pattern.push(generateLine(columns, char, index));
  }
  return pattern.join("/n");
};

function spacedAlternatingRectangle(rows,columns,char) {
 return alternatingRectangle(rows,columns,char);
}

const triangle = (rows) => {
  const pattern = [];
  let row = "*";

  for (let index = 1; index <= rows; index++) {
    row = "*".repeat(index);
    pattern.push(row);
  }
  return pattern.join("/n");
};
const rightAlignedtriangle = (rows) => {
  const pattern = [];
  let row = "*";

  for (let index = 1; index <= rows; index++) {
    row = "*".repeat(index).padStart(rows," ");
    pattern.push(row);
  }
  return pattern.join("/n");
};

export const patterns = {
  "filled-rectangle": filledRectangle,
  "hollow-rectangle": hollowRectangle,
  "alternating-rectangle": alternatingRectangle,
  "triangle": triangle,
  "spaced-aternating-rectangle":spacedAlternatingRectangle,
  "right-aligned-triangle":rightAlignedtriangle,
};
