const options = ["book", "blue", "moon", "yellow", "pink", "banana", "black"];
let sequence = [];
let round = 1;
function getRandomOption() {
  const index = Math.floor(Math.random() * options.length);
  return options[index];
}

function addNewElement() {
  const newElement = getRandomOption();
  sequence.push(newElement);
  return newElement;
}

function showNewElement(element) {
  console.log("\nRound" + round + "Memorize the new Element! ");
  console.log(element);
}

function getUserInput() {
  const input = prompt("Enter The Full Sequence With sapace");
  return input.trim().split(" ").slice(0, sequence.length);
}

function isCorrect(input) {

  if (input.length !== sequence.length) {
    return false;
  }
  for (let index = 0; index < input.length; index++) {
    if (input[index] !== sequence[index]) {
      return false;
    }
  }
  return true;
}

function playRound() {
  let active = true;
  while (active) {
    const newElement = addNewElement();
    showNewElement(newElement);
    const input = getUserInput();
    console.log(isCorrect(input));
    if (isCorrect(input)) {
      console.log("✅ Correct Next Round ComingUp");
      console.clear();
      round++;
    } else {
      console.log(`--- GAME OVER --- \n Score : ${round - 1}`);
      active = false;
    }
  }
}
playRound();
