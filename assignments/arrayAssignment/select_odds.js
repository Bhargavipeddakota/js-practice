// Given an array of numbers return a new array containing 
// only odd elements of the
// original array.
// selectOdds([3, 2, 4, 5, 7]) => [3, 5, 7]
// selectOdds([2, 4, 6]) => []
// Do not modify the input array.
function isOdd(number) {
  return number % 2 !== 0;
}

function selectOdds(numbers) {
  const oddNumbersArray = [];

  for (let index = 0; index < numbers.length; index++) {
    if (isOdd(numbers[index])) {
      oddNumbersArray.push(numbers[index]);
    }
  }

  return oddNumbersArray;
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

function composeMsg(description, array, actual, expected) {
  const icon = generateEmoji(actual, expected);
  let message = `\t${icon} ${description}`;
  if (icon !== "✅") {
    message += `\n\t   | Input    : array: ${array}\n`;
    message += `\t   | Actual   : ${actual}\n`;
    message += `\t   | Expected : ${expected}\n`;
  }

  return message;
}

function testselectOdd(description, array, expected) {
  const actual = selectOdds(array);
  console.log(composeMsg(description, array, actual, expected));
}

function testAll() {
  testselectOdd("array with 1 elememts", [0], []);
  testselectOdd("array with 2 evenelememts", [0, 2], []);
  testselectOdd("array with 5 natural numbers", [1, 2, 3, 4, 5], [1, 3, 5]);
}

testAll()