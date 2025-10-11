function showDescription() {
  console.clear();
  console.log("\n            🐮 Welcome to the Cows and Bulls Game! 🐂");
  console.log("-".repeat(75))
  console.log(`
   HOW TO PLAY:
👉🏻 The computer chooses a secret 4-digit number.\n
👉🏻 Each digit is unique (no repeats).\n
👉🏻 You must guess the number within your chosen number of attempts.\n
👉🏻 After every guess:
   🐂 Bull → Correct digit in the correct position.
   🐮 Cow  → Correct digit but in the wrong position.\n
👉🏻 You win if you get 4 Bulls!

💡 Example:
    Secret Number: 4279
    Your Guess: 4792 → 1 Bull, 3 Cows
`);
  prompt("Press OK to start the game! 🚀");
  console.clear();
}
function getRandomDigit() {
  return Math.floor(Math.random() * 10);
}

function generateSecreateNumber() {
  let digits = [];
  while (digits.length < 4) {
    const randomDigit = getRandomDigit();
    if (!digits.includes(randomDigit)) {
      digits.push(randomDigit);
    }
  }
  return digits.join("");
}

function getGuess() {
  const guess = prompt(" enter your guess");
  if (guess.length === 4) {
    return guess;
  }
  console.log(" enter 4 digits number only \n");
  return getGuess();
}

function composeWinMessage() {
  console.log("-".repeat(21))
  console.log('\n CONGRATULATIONS! 🎉 \n 🏆 You Guessed The Number 🥳\n');
  console.log("-".repeat(22));
}

function composeLoosMessage(attempts, secreateNumber) {
  console.log("-".repeat(21))
  console.log(`\n ---Game Over--- \n You used All ${attempts} attempts`);
  console.log(` The SecretNumber was ${secreateNumber}\n`);
  console.log("-".repeat(22));
}

function checkGuess(guess, secreateNumber) {
  let cowsAndBulls = [0, 0];

  for (let index = 0; index < guess.length; index++) {
    if (guess[index] === secreateNumber[index]) {
      cowsAndBulls[1]++;
    } else if (secreateNumber.includes(guess[index])) {
      cowsAndBulls[0]++;
    }
  }
  return cowsAndBulls;
}

function NoOfAttempts() {
  let message = "\n 🎯 Set Your Challenge ! \n";
  message += " How Many Attempts Will you take";
  message += " to find the secrete Number : ";
  return message;
}

function checkAttempts(attempts, maxAttempts) {
  if (attempts === maxAttempts - 1) {
    console.log(" ⚠️ Final Attempt");
  }
}

function playCowsAndBulls(attempts, maxAttempts, secreateNumber) {
  while (attempts < maxAttempts) {
    const guess = getGuess();
    const result = checkGuess(guess, secreateNumber);
    if (result[1] === 4) {
      composeWinMessage();
      break;
    }
    console.log(`\n cows : ${result[0]}  🐮\n Bulls :  ${result[1]} 🐃\n`);
    attempts++;
    checkAttempts(attempts, maxAttempts);
  }
  return attempts;
}

function play() {
  const secreateNumber = generateSecreateNumber();
  console.log(secreateNumber);
  let attempts = 0;
  const maxAttempts = parseInt(prompt(NoOfAttempts()));
  console.log(`\n A Secret Number has been chosen \n you have ${maxAttempts} attempts\n`);
  attempts = playCowsAndBulls(attempts, maxAttempts, secreateNumber);
  if (attempts === maxAttempts) {
    composeLoosMessage(maxAttempts, secreateNumber);
  }
}

function main() {
  showDescription();
  play();
}

main();
