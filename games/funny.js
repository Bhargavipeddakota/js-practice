import * as allFunc from "./commonFunctions.js";
const drawOnScreen = (screen, y, x, char) => screen[y][x] = char;

const animate = () => {
  let screen = allFunc.createScreen(50, 7, "~");
  let x1 = 0;
  let x2 = 49;
  let y1 = [0, 1, 2, 1];
  let y2 = [3, 4, 5, 4];
  let i = 0;
  setInterval(() => {
    const fish1 = "><(((O>";
    const fish2 = "<O)))><";
    console.clear();
    drawOnScreen(screen, y1[i % 4], x1++ % 50, fish1);
    drawOnScreen(screen, y2[i % 4], x2--, fish2);
    allFunc.display(screen);
    allFunc.clearScreen(screen, "~");
    if (x2 <= 0) {
      x2 = 50;
    }
    i++;
  }, 200);
};
animate();
