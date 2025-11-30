// Given an array of numbers and a threshold value, return a new array
// that contains all the numbers which are below threshold.
// filterBelow([6, 2, 3, 1, 4, 7], 3) => [2, 1]
// filterBelow([1, 2, 3], 0) => []
// do not modify input parameters
function filterBelow(array, threshold) {
  let lessThanThreshold = [];

  for (let index = 0; index < array.length; index++) {
    if (array[index] < threshold) {
      lessThanThreshold.push(array[index]);
    }
  }

  return lessThanThreshold;
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

function testfilterBelow(description, array, threshold, expected) {
  const actual = filterBelow(array, threshold);
  console.log(composeMsg(description, array, threshold, actual, expected));
}

function testAll() {
  testfilterBelow(" empty array", [], 1, []);
  testfilterBelow("array with 1 element", [1], 2, [1]);
  testfilterBelow("array with 2 elements", [1, 2], 1, []);
}
testAll();