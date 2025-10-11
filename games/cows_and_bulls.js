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
function composeMessage() {
  console.log("-".repeat(21))
  console.log('\n CONGRATULATIONS! 🎉 \n You Guessed The Number 🥳\n');
  console.log("-".repeat(22));
}
function checkGuess(guess, secreateNumber) {
  if (secreateNumber === guess) {
    composeMessage();
  }
}

function playCowsAndBulls() {
  const secreateNumber = generateSecreateNumber();
  console.log(secreateNumber);
  const guess = getGuess();
  checkGuess(guess, secreateNumber);
}

playCowsAndBulls();
