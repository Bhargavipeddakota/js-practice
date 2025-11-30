// Return all the elements of array1 which are not present in array2.
// difference([1, 2, 3], [2, 3, 4]) => [1]
function difference(array1, array2) {
  const notInArray2 = [];
  for (let index = 0; index < array1.length; index++) {
    if (!includes(array2, array1[index])) {
      notInArray2.push(array1[index]);
    }
  }
  return notInArray2;
}

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

function includes(array, target) {
  for (let index = 0; index < array.length; index++) {
    if (areDeepEqual(array[index], target)) {
      return true;
    }
  }
  return false;
}

function generateEmoji(actual, expected) {
  return areDeepEqual(actual, expected) ? "✅" : "❌";
}

function composeMsg(description, array1, array2, actual, expected) {
  const icon = generateEmoji(actual, expected);
  let message = `\t${icon} ${description}`;
  if (icon !== "✅") {
    message += `\n\t   | Input    : array1: ${array1} array2: ${array2}\n`;
    message += `\t   | Actual   : ${actual}\n`;
    message += `\t   | Expected : ${expected}\n`;
  }

  return message;
}

function testDiffrence(description, array1, array2, expected) {
  const actual = difference(array1, array2);
  console.log(composeMsg(description, array1, array2, actual, expected));
}

function testAll() {
  testDiffrence("single element array ", [1], [2], [1]);
  testDiffrence("array1 with 2 elements ", [1, 2], [2], [1]);
  testDiffrence("array 1 & 2 with 3 elements ", [1, 2, 3], [2, 3, 4] ,[1]);
}

testAll();
