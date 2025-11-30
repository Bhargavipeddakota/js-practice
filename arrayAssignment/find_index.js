// Given an array of numbers and a element, 
// return the first index in the array
// where element is present else -1
// findIndex(["apple", "cake", "tea", "coffee", "tea"], "tea") => 2
// do not modify input parameters
function findIndex(array, element) {
  for (let index = 0; index < array.length; index++) {

    if (array[index] === element) {
      return index;
    }

  }

  return -1;
}

function generateEmoji(result) {
  return result ? "✅" : "❌";
}

function composeMsg(description, array, element, actual, expected) {
  const result = actual === expected;
  const icon = generateEmoji(result);
  let message = `\t${icon} ${description}`;
  if (!result) {
    message += `\n\t   | Input    : array: ${array} element: ${element}\n`;
    message += `\t   | Actual   : ${actual}\n`;
    message += `\t   | Expected : ${expected}\n`;
  }

  return message;
}

function testFindIndex(description, array, element, expected) {
  const actual = findIndex(array, element);
  console.log(composeMsg(description, array, element, actual, expected));
}

function testAll() {
  testFindIndex(" empty array", [], "a", -1);
  testFindIndex(" arry with one element", ["a"], "a", 0);
  testFindIndex(" arry with 2 elements", [1, "a"], "a", 1);
}

testAll();
