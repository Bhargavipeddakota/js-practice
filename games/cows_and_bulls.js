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
  return prompt("enter your guess");
}

function composeWinMessage() {
  console.log("-".repeat(21))
  console.log('\n CONGRATULATIONS! 🎉 \n You Guessed The Number 🥳\n');
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
  let message = "set Your Challenge!";
  message += "How Many Attempts Will you take";
  message += " to find the secrete Number";
  return message;
}

function playCowsAndBulls() {
  const secreateNumber = generateSecreateNumber();
  let attempts = parseInt(prompt(NoOfAttempts()));
  console.log(secreateNumber);
  while (attempts > 0) {
    const guess = getGuess();
    const result = checkGuess(guess, secreateNumber);
    if (result[1] === 4) {
      composeWinMessage();
      break;
    }
    console.log(`${result[0]} cows | ${result[1]} bulls`);
    attempts--;
  }
}

playCowsAndBulls();
