// Given an array of numbers and a threshold value, return a new array
// that contains all the numbers above the threshold.
// filterAbove([6, 2, 3, 1, 4, 7], 3) => [6, 4, 7]
// filterAbove([1, 2, 3], 4) => []
// do not modify input parameters
function filterAbove(array, threshold) {
  let greaterThanThreshold = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index] > threshold) {
      greaterThanThreshold.push(array[index]);
    }
  }
  return greaterThanThreshold;
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

function composeMsg(description, array, threshold, actual, expected) {
  const icon = generateEmoji(actual, expected);
  let message = `\t${icon} ${description}`;
  if (icon !== "✅") {
    message += `\n\t   | Input    : array: ${array} threshold: ${threshold}\n`;
    message += `\t   | Actual   : ${actual}\n`;
    message += `\t   | Expected : ${expected}\n`;
  }

  return message;
}

function testfilterAbove(description, array, threshold, expected) {
  const actual = filterAbove(array, threshold);
  console.log(composeMsg(description, array, threshold, actual, expected));
}

function testAll() {
  testfilterAbove(" empty array", [], 1, []);
  testfilterAbove("array with 1 element", [1], 2, []);
  testfilterAbove("array with 2 element", [1, 2], 1, [2]);
}
testAll();