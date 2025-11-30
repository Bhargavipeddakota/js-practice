// Given an array return reverse of array. DO NOT USE `.reverse()` function
// Write your own implementation of reverse
// reverse([1, 2, 3]) => [3, 2, 1]
// reverse([]) => []
// do not modify input parameters
function reverse(array) {
  const reversedArray = [];

  for (let index = array.length - 1; index >= 0; index--) {
    reversedArray.push(array[index]);
  }

  return reversedArray;
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

function testmapLength(description, array, expected) {
  const actual = reverse(array);
  console.log(composeMsg(description, array, actual, expected));
}

function testAll() {
  testmapLength("array with 1 elememts", [0], [0]);
  testmapLength("array with 2 elememts", [0, 1], [1, 0]);
  testmapLength("array with 3 elememts", [0, 1, 2], [2, 1, 0]);
  testmapLength("array with 3 elememts", [0, 1, 2], [2, 1, 0]);
}
testAll();