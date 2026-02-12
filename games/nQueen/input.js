// const MOUSE_ENABLE = `\x1b[?1002h`;

// const enableMouse = () => writer.write(encoder.encode(MOUSE_ENABLE));

// const enableRawMode = () => Deno.stdin.setRaw(true, { cbreak: true });
// const moveCursor = (x, y) => writer.write(encoder.encode(`${ESC}[${y};${x}H`));

// export const getMoveInput = async() =>{ 
//    enableRawMode();
//   await enableMouse();
//   const x,y = 
 
// }
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
