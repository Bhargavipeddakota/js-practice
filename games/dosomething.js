import * as allFunc from "./commonFunctions.js";

const rolldice = () => Math.floor(Math.random() * 10) + 1;

const drawOnScreen = (screen, y, x, char) => screen[y][x] = char;


const animate = (startPos = 0) => {
  const screen = allFunc.createScreen(103, 1);
  let diceRoll = rolldice();
  prompt(`You rolled: ${diceRoll}! Press OK to start running.`);
  let position = startPos;
let stepsTaken = 0;
  const interval = setInterval(() => {
    console.clear();
    allFunc.clearScreen(screen);
    drawOnScreen(screen, 0, position, "🏃‍➡️");
    allFunc.display(screen);

    position++;
    stepsTaken++;
    if (stepsTaken >= diceRoll) {
      clearInterval(interval);
      animate(position);
    }
  }, 200);
};

const main = () => {
  animate();
};

main();
