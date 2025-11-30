// Given array1 and array2, returns true if both
//  arrays are deeply equal, else false.
// Deep equality means both arrays contain 
// the same elements in the same order,
// including any nested arrays, which must also be deeply equal.
// Examples:
// areDeepEqual([1, 2, 3], [1, 2, 3]) => true
// areDeepEqual([1, [2, 3]], [1, [2, 3]]) => true
// areDeepEqual([1, [2, 3]], [1, [3, 2]]) => false
// areDeepEqual([1, 2], [1, 2, 3]) => false
// areDeepEqual([1, [2, [3]]], [1, [2, [3]]]) => true
// areDeepEqual([1, [2, [3]]], [1, [2, 3]]) => false
// do not modify input parameters
function isArray(element) {
  return typeof (element) === "object";
}

function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let index = 0; index < array1.length; index++) {
    if (!areDeepEqual(array1[index], array2[index])) {
      return false;
    }
  }
  return true;
}
function areDeepEqual(array1, array2) {
  if (typeof array1 !== typeof array2) {
    return false;
  }
  if (isArray(array1) && isArray(array2)) {
    return areArraysEqual(array1, array2);
  }
  return array1 === array2;
}

function generateEmoji(result) {
  return result ? "✅" : "❌";
}

function composeMsg(description, array1, array2, actual, expected) {
  const result = actual === expected;
  const icon = generateEmoji(result);
  let message = `\t${icon} ${description}`;
  if (!result) {
    message += `\n\t   | Input    : array1: ${array1} array2: ${array2}\n`;
    message += `\t   | Actual   : ${actual}\n`;
    message += `\t   | Expected : ${expected}\n`;
  }

  return message;
}

function testAreDeepEqual(description, array1, array2, expected) {
  const actual = areDeepEqual(array1, array2);
  console.log(composeMsg(description, array1, array2, actual, expected));
}

function testAll() {
  testAreDeepEqual(" empty array", [], [], true);
  testAreDeepEqual(" array with diffrent length", [0], [0, 0], false);
  testAreDeepEqual("multi array with same elements", [[0]], [[0]], true);
  testAreDeepEqual(" multi array with diffrent elements", [[0, 2]], [[0, 1]], false);
}

testAll();
