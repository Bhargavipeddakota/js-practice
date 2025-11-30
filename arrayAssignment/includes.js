// Given an array and a value, returns true if the value is present in the array, else false.
// Examples:
// includes([1, 2, 3], 2) => true
// includes([1, 2, 3], 4) => false
// includes([], 1) => false
// do not modify input parameters
function isArray(x) {
  return typeof x === 'object';
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
function isEqual(element, target) {
  return element === target;
}
function includes(array, target) {
  for (let index = 0; index < array.length; index++) {
    if (areDeepEqual(array[index], target)) {
      return true;
    }
  }
  return false;
}

function generateEmoji(result) {
  return result ? "✅" : "❌";
}

function composeMsg(description, array, target, actual, expected) {
  const result = actual === expected;
  const icon = generateEmoji(result);
  let message = `\t${icon} ${description}`;
  if (!result) {
    message += `\n\t   | Input    : array: ${array} target: ${target}\n`;
    message += `\t   | Actual   : ${actual}\n`;
    message += `\t   | Expected : ${expected}\n`;
  }

  return message;
}

function testIncludes(description, array, target, expected) {
  const actual = includes(array, target);
  console.log(composeMsg(description, array, target, actual, expected));
}

function testAll() {
  testIncludes(" empty array", [], 1, false);
  testIncludes(" empty array", [1], 1, true);
  testIncludes(" array with in array", [1, [2]], [2], true);

}

testAll();