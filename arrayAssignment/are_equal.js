// Given array1 and array2 returns true if both array are equal else false.
// Examples:
// areEqual([1, 2, 3, 4], [1, 2, 3, 4]) => true
// areEqual([1, 2, 3], [1, 2, 3, 4]) => false
// areEqual([1, 2, 3], [1, 3, 2]) => false
// areEqual([1, [22] 3], [1, [22], 3]) => true
// do not modify input parameters
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
  return actual === expected ? "✅" : "❌";
}

function composeMsg(description, array1, array2, actual, expected) {
  const icon = generateEmoji(actual, expected);
  let message = `\t${icon} ${description}`;
  if (actual !== expected) {
    message += `\n\t   | Input    : array1: ${array1}  array2: ${array2}\n`;
    message += `\t   | Actual   : ${actual}\n`;
    message += `\t   | Expected : ${expected}\n`;
  }

  return message;
}

function testmapLength(description, array1, array2, expected) {
  const actual = areEqual(array1, array2);
  console.log(composeMsg(description, array1, array2, actual, expected));
}

function testAll() {
  testmapLength("array with 1 elememts", [0], [0], true);
  testmapLength("array with diffrent length", [0, 1], [0], false);
  testmapLength("array with 2 same elements length", [0, 1], [0, 1], true);
  testmapLength("array with diffrent elements", [0, 1], [1, 1], false);
  testmapLength("array with diffrent elements", [0, 1], [0, 2], false);
  testmapLength("array with same elements but diffrent positions", [1, 2], [2, 1], false);
  testmapLength("empty arrays", [], [],true);
}
testAll();