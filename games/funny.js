import * as allFunc from "./commonFunctions.js";
const drawOnScreen = (screen, y, x, char) => screen[y][x] = char;

  const updateObject = (angle,x1,x2) => {
    return {
    y1 : 1+ Math.sin(angle),
    y2 : 1+Math.sin(angle),
    x1 : x1++,
    x2:x2--,
    }
  }

const animate = () => {
  let screen = allFunc.createScreen(50, 7, "~");
  let object = {
    x1 : 0,
   x2 : 49,
   y1 : 0,
   y2 : 0,
  }
  let angle  = 0;
  setInterval(() => {
    const fishes = { fish1: "><(((O>", fish2 :"<O)))><"};
    console.clear();
  const  {y1,y2,x1,x2} = updateObject(angle,object);
    drawOnScreen(screen, y1, x1, fishes.fish1);
    drawOnScreen(screen, y2, x2, fishes.fish2);
    allFunc.display(screen);
    allFunc.clearScreen(screen, "~");
    if (x2 <= 0) {
      x2 = 50;
    }
    object.angle++;
  }, 200);
};
animate();
