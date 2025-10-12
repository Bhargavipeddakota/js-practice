function rolldice() {
  return Math.floor(Math.random() * 6) + 1;
}
const SNAKES = [[99, 54], [93, 67], [87, 54], [70, 55], [52, 42], [48, 16], [28, 10]];
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
  return number + "";
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
      row.push(cellValue.padStart(3, " "));
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

function getPosition(positions, index) {
  prompt("press Enter to rollDice");
  let newPos = positions[index] + rolldice();
  if (newPos > 100) {
    positions[index] = positions[index];
  }
  positions[index] = newPos;
  return positions[index];
}

function movePlayer(positions, turn) {
  let nextPos = getPosition(positions, turn);
}

function playGame() {
  console.clear();
  const data = getPlayerDetalis();
  let players = data[0];
  let positions = data[1];
  let turn = 0;
  while (true) {
    drawBoard(positions);
    movePlayer(positions, turn);
    turn = (turn + 1) % 2;
  }
}

playGame();
