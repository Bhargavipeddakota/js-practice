const rolldice = () => Math.floor(Math.random() * 10) + 1;

const createScreen = (width, height) => {
  const screen = [];
  for (let i = 0; i < height; i++) {
    screen.push([..."_".repeat(width), "🏁"]);
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
      screen[i][j] = "_";
      screen[0][103] = "🏁";
    }
  }
};

const drawOnScreen = (screen, y, x, char) => screen[y][x] = char;

const animate = () => {
  const screen = createScreen(103, 1);
  let move = 0;
  setInterval(() => {
    prompt("press enter to move");
    move += rolldice();
    move = (move+1)% 104;
    console.clear();
    drawOnScreen(screen, 0, move, "🏃‍➡️");
    display(screen);
    clearScreen(screen);
  }, 100);
};

const main = () => {
  animate();
};
main();
