import * as allFunc from "./commonFunctions.js";

const drawString = (screen, y, x, str) => {
  for (let i = 0; i < str.length; i++) {
    if (screen[y] && screen[y][x + i]) {
      screen[y][x + i] = str[i];
    }
  }
};

const updateObject = (obj) => {
  obj.angle += 0.2;

  obj.y1 = Math.round(3 + Math.sin(obj.angle));
  obj.y2 = Math.round(3 + Math.sin(obj.angle + Math.PI));

  obj.x1 += 1;
  obj.x2 -= 1;

  if (obj.x1 > 49) obj.x1 = -7;
  if (obj.x2 < -7) obj.x2 = 49;
};

const animate = () => {
  let screen = allFunc.createScreen(50, 7, "~");

  let object = {
    x1: 0,
    x2: 49,
    y1: 3,
    y2: 3,
    angle: 0
  };

  const fishes = {
    fish1: "><(((O>",
    fish2: "<O)))><"
  };

  setInterval(() => {
    console.clear();

    updateObject(object);

    drawString(screen, object.y1, object.x1, fishes.fish1);
    drawString(screen, object.y2, object.x2, fishes.fish2);

    allFunc.display(screen);
    allFunc.clearScreen(screen, " ");
  }, 200);
};

animate();
