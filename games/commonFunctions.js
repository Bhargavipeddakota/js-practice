export const createScreen = (width, height,char) => {
  console.log(char)
  const screen = [];
  for (let i = 0; i < height; i++) {
    screen.push([...char.repeat(width)]);
  }
  return screen;
};

export const display = (screen) => {
  console.log(screen.map((row) => row.join("")).join("\n"));
};
 export const drawObject = (screen, obj) => {
  if (obj.y >= 0 && obj.y < screen.length &&
      obj.x >= 0 && obj.x < screen[0].length) {
    screen[obj.y][obj.x] = obj.char;
  }
};

export const clearScreen = (screen,char) => {
  for (let i = 0; i < screen.length; i++) {
    screen[i].fill(char);
  }
};