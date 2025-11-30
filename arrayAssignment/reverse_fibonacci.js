// Write a function that gives first n elements of fibonacci in reverse order
// fibonacci(5) => [3, 2, 1, 1, 0]
// do not modify input parameters
function reverseFibonacci(numberOfTerms) {
  let currentTerm = 0;
  let prevTerm = 1;
  const fibonacciSeries = [];

  for (let index = 0; index < numberOfTerms; index++) {
    fibonacciSeries.unshift(currentTerm);
    currentTerm = currentTerm + prevTerm;
    prevTerm = currentTerm - prevTerm;
  }

  return fibonacciSeries;
}

function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }

  return true;
}

function generateEmoji(actual, expected) {
  return areEqual(actual, expected) ? "✅" : "❌";
}

function composeMsg(description, numberOfTerms, actual, expected) {
  const icon = generateEmoji(actual, expected);
  let message = `\t${icon} ${description}`;
  if (icon !== "✅") {
    message += `\n\t   | Input    : n: ${numberOfTerms}\n`;
    message += `\t   | Actual   : ${actual}\n`;
    message += `\t   | Expected : ${expected}\n`;
  }

  return message;
}

function testReverseFibonacci(description, numberOfTerms, expected) {
  const actual = reverseFibonacci(numberOfTerms);
  console.log(composeMsg(description, numberOfTerms, actual, expected));
}

function testAll() {
  testReverseFibonacci(" n = 0", 0, []);
  testReverseFibonacci(" n = 2", 2, [1, 0]);
  testReverseFibonacci(" n = 3", 3, [1, 1, 0]);
  testReverseFibonacci(" n = 4", 4, [2, 1, 1, 0]);
}

testAll();