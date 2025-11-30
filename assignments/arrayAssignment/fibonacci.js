// Write a function that gives first n elements of fibonacci in an array
// fibonacci(5) => [0, 1, 1, 2, 3]
// do not modify input parameters
function fibonacci(numberOfTerms) {
  let currentTerm = 0;
  let prevTerm = 1;
  const fibonacciSeries = [];

  for (let index = 0; index < numberOfTerms; index++) {
    fibonacciSeries.push(currentTerm);
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

function testfibonacci(description, numberOfTerms, expected) {
  const actual = fibonacci(numberOfTerms);
  console.log(composeMsg(description, numberOfTerms, actual, expected));
}

function testAll() {
  testfibonacci(" n = 1", 1, [0]);
  testfibonacci(" n = 2", 2, [0, 1]);
  testfibonacci(" n = 3", 3, [0, 1, 1]);
  testfibonacci(" n = 4", 4, [0, 1, 1, 2]);
}
testAll();
