export const createScreen = (width, height,char) => {
  console.log(char)
  const screen = [];
  for (let i = 0; i < height; i++) {
    screen.push([...char.repeat(width)]);
  }
  return screen;
};
export const display = (screen,) => {
  for (const i in screen) {
    console.log(screen[i].join(" ").slice(0,99));
  }
};
export const clearScreen = (screen,char) => {
  for (const i in screen) {
    for (const j in screen[i]) {
      screen[i][j] = char;
    }
  }
};