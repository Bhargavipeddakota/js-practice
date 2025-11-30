const createScreen = (width, height) => {
  const screen = [];
  for (let i = 0; i < height; i++) {
    screen.push([..."_".repeat(width)]);
  }
  return screen;
};

const display = (screen) => {
  for (const i in screen) {
    console.log(screen[i].join(""));
  }
};

const clearScreen = (screen) => {
  for (const i in screen) {
    for (const j in screen[i]) {
      screen[i][j] = " ";
    }
  }
};

const drawOnScreen = (screen, y, x, char) => screen[y][x] = char;

const animate = () => {
  const screen = createScreen(105, 3);
  let x = 0;
  setInterval(() => {
    x = (x+1) % 105;
    console.clear();
    drawOnScreen(screen, 0, x, "🏃‍➡️");
    display(screen);
    clearScreen(screen);
  }, 100);
};
const main = () => {
  animate();
};

main();
