const createScreen = (width, height) => {
  const screen = [];
  for (let i = 0; i < height; i++) {
    screen.push([...".".repeat(width)]);
  }
  return screen;
};
const drawScreen = (screen, y, x, i) => {
  if(x === 28) {
  ++i;
  }
  screen[y][x] = i;
    return i;
};

const clearScreen = (screen) => {
  for (const i in screen) {
    for (const j in screen[i]) {
      screen[i][j] = ".";
    }
  }
};

const display = (screen) => {
  for (const i in screen) {
    console.log(screen[i].join(""));
  }
};

const animate = () => {
  const [width, height] = [30, 30];
  const screen = createScreen(width, height);
  let [x, y] = [0, 0];
  let i =0;
  setInterval(() => {
    x = (x + 2) % width;
    y = (y + 3) % height;
    console.clear();
    i = drawScreen(screen,y,x, i);
    display(screen);
    clearScreen(screen);
  }, 200);
};

animate();
