function rolldice() {
  return Math.floor(Math.random() * 6) + 1;
}
const SNAKES = [[99, 54], [93, 67], [87, 54], [70, 55], [52, 42],[59,38],[48, 16], [28, 10]];
const LADDERS = [[9, 27], [18, 37], [25, 54], [33, 51], [56, 64], [68, 88], [79, 100], [76, 97]];

function getCellSymbol(number, positions) {
  if (positions[0] === number && positions[1] === number) {
    return "🤝";
  }
  if (positions[0] === number) {
    return "1️⃣";
  }
  if (positions[1] === number) {
    return "2️⃣";
  }
  if (number === 100) {
    return "🏁";
  }
  if (isLadder(number)) {
    return "🪜";
  }
  if (isSnake(number)) {
    return "🐍";
  }
  return number + "";
}

function bgRed(text) {
  return "\x1B[41m" + text + "\x1B[0m";
}

function drawBoard(positions) {
  console.clear();
  let board = "";
  const size = 10;
  board = getRows(size, board, positions);
  console.log(board);
}

function getRows(size, board, positions) {
  let number = 100;
  for (let rows = 0; rows < size; rows++) {
    let row = [];
    for (let col = 0; col < size; col++) {
      let cellValue = getCellSymbol(number, positions);
      row.push(cellValue.padStart(4, " "));
      number--;
    }

    board = combineRows(rows, row, board);
  }
  return board;
}

function combineRows(rows, row, board) {
  if (rows % 2 === 1) {
    row.reverse();
  }
  board += row.join("  ") + "\n\n";
  return board;
}

function getPlayerDetalis() {
  const players = [];
  players[0] = prompt("enter player1 name");
  players[1] = prompt("enter player2 name");
  const positions = [1, 1];
  return [players, positions]
}
function isSnake(number) {
  for (let index = 0; index < SNAKES.length; index++) {
    if (SNAKES[index][0] === number) {
      return true;
    }
  }
  return false;
}

function isLadder(number) {
  for (let index = 0; index < SNAKES.length; index++) {
    if (LADDERS[index][0] === number) {
      return true;
    }
  }
  return false;
}

function getTailValue(number) {
  for (let index = 0; index < SNAKES.length; index++) {
    ;
    if (SNAKES[index][0] === number) {
      return SNAKES[index][1];
    }
  }
}

function getLadderValue(number) {
  for (let index = 0; index < SNAKES.length; index++) {
    if (LADDERS[index][0] === number) {
      return LADDERS[index][0];
    }
  }
}

function checkSnakeOrLadder(position) {
  if (isSnake(position)) {
    return getTailValue(position);
  }
  if (isLadder(position)) {
    return getLadderValue(position);
  }
  return position;
}

function hasWon(positions, turn) {
  return positions[turn] === 100;
}

function getPosition(positions, index, players) {
  prompt(`press Enter to rollDice ${players[index]}`);
  let newPos = positions[index] + rolldice();
  if (newPos > 100) {
    return positions[index] = positions[index];
  }
  positions[index] = checkSnakeOrLadder(newPos);
}

function composeWinMessage(players, turn) {
  console.log(`${players[turn]}  🏆 Win The Game`);
}

function showMsg(positions, players, turn) {
  console.log("-".repeat(20));
  console.log(`\n ${players[turn]} \n position : ${positions[turn]}\n`);
  console.log("-".repeat(20));
}

function playGame() {
  const data = getPlayerDetalis();
  let players = data[0];
  let positions = data[1];
  let turn = 0;
  while (true) {
    if (hasWon(positions, turn)) {
      return composeWinMessage(players, turn);
    }
    drawBoard(positions);
    getPosition(positions, turn, players);
    showMsg(positions, players, turn);
    turn = (turn + 1) % 2;
  }
}

playGame();
