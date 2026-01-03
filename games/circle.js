const createScreen = (width, height) => {
  const screen = [];
  for (let i = 0; i < 
    height; i++) {
    screen.push([..." ".repeat(width)]);
  }
  return screen;
};
const screen = createScreen(50,20);

const clearScreen = (screen) => {
  for (const i in screen) {
    for (const j in screen[i]) {
      screen[i][j] = " ";
    }
  }
};

const drawCircle = (screen, x, y) => screen[y][x] = "*";

const display = (screen) => {
  for (const i in screen) {
    console.log(screen[i].join(""));
  }
};
let angle = 1;
const radious = 10;

setInterval(() => {
  // clearScreen(screen);
  const y = Math.floor(10 + radious * 0.5* Math.sin(angle*(Math.PI/180)));
  const x = Math.floor(10 + radious * Math.cos(angle * (Math.PI/180)));
   console.clear();
  drawCircle(screen, x, y);
  display(screen);
  angle +=50;
}, 100);
