import {createScreen,clearScreen,drawObject} from "./commonFunctions.js";

const display = (screen) => {
  console.log(screen.map((r) => r.join("")).join("\n"));
};

const updateObject = (obj) => {
  const rad = obj.angle * (Math.PI / 180);
  obj.x = Math.floor(obj.cx + obj.radius * Math.cos(rad));
  obj.y = Math.floor(obj.cy + obj.radius * 0.5 * Math.sin(rad));
  obj.angle = obj.angle+1;
};

const screen = createScreen(50, 20, " ");

const objects = [];
const centerX = 25;
const centerY = 10;
const radius = 7;

for (let i = 0; i < 6; i++) {
  objects.push({
    x: 0,
    y: 0,
    angle: i * (360 / 6),
    // angle :(i*100),
    char: "⏺",
    radius,
    cx: centerX,
    cy: centerY,
  });
}

setInterval(() => {
  clearScreen(screen," ");

  for (const obj of objects) {
    updateObject(obj);
    drawObject(screen, obj);
  }

  console.clear();
  display(screen);
}, 100);
