export const getMoveInput = () =>
  prompt("Place: row,col | Remove: r row,col: ").trim();

export const parseMove = (input) => {
  if (input.startsWith("r")) {
    const [row, col] = input.slice(1).trim().split(",").map(Number);
    return { type: "remove", row, col };
  }

  const [row, col] = input.split(",").map(Number);
  return { type: "place", row, col };
};

