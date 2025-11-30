function showDescreption() {
  console.clear();
  console.log(`                  🧠 Welcome to the MEMORY CHAIN Game! 🧩 `);
  console.log("-".repeat(100));

  console.log(`
How to Play:\n
 👉🏻 The computer will show you one random word.\n
 👉🏻 Memorize it carefully!\n
 👉🏻 Then, you must enter the full sequence of all words shown so far — 
    from the first to the newest — separated by spaces.\n
 👉🏻 If you type the correct sequence, the game continues to the next round.\n
 👉🏻 If you make a mistake... ❌ the game ends!\n

 🎯 Goal: Remember as long a sequence as you can!\n`);
  prompt("      Press ENTER to star game")

}
function collectionOfWords() {
  const str1 = "book,blue,moon,yellow,pink,banana,black,red,green,purple,";
  const str2 = "tree,cat,rat,bag,bat,ring,sun,star,pen,ice,monkey,donkey";
  return (str1 + str2).split(",");
}

const options = collectionOfWords();
console.log(options);
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
  console.log("Round " + round + "  Memorize the new Element! \n");
  console.log("👉🏻 ", element + "\n");
}

function getUserInput() {
  const input = prompt("Enter The Full Sequence With space");
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
function composeGameEndMessage() {
  console.log(`----- GAME OVER ----- \n`);
  console.log(` ☑️ Correct sequence is : ${sequence}\n`);
  console.log(` Score🏆 : ${round - 1}\n`);
  console.log("-".repeat(30));
}

function playRound() {
  console.clear();
  let active = true;
  while (active) {
    const newElement = addNewElement();
    showNewElement(newElement);
    const input = getUserInput();
    if (isCorrect(input)) {
      console.log("✅ Correct Next Round ComingUp");
      console.clear();
      round++;
    } else {
      composeGameEndMessage();
      active = false;
    }
  }
}
function play() {
  showDescreption();
  playRound();
}
play();