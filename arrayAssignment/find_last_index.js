// Given an array of numbers and a element, return the last index in the array
// where element is present else -1
// findLastIndex(["apple", "cake", "tea", "coffee", "tea", "pen"], "tea") => 4
// do not modify input parameters
function findLastIndex(array, element) {
  for (let index = array.length - 1; index >= 0; index--) {

    if (array[index] === element) {
      return index;
    }

  }

  return -1;
}

function generateEmoji(actual, expected) {
  return (actual === expected) ? "✅" : "❌";
}

function composeMsg(description, array, element, actual, expected) {
  const icon = generateEmoji(actual, expected);
  let message = `\t${icon} ${description}`;
  if (icon !== "✅") {
    message += `\n\t   | Input    : array: ${array} element: ${element}\n`;
    message += `\t   | Actual   : ${actual}\n`;
    message += `\t   | Expected : ${expected}\n`;
  }

  return message;
}

function testLastFindIndex(description, array, element, expected) {
  const actual = findLastIndex(array, element);
  console.log(composeMsg(description, array, element, actual, expected));
}

function testAll() {
  testLastFindIndex(" empty array", [], "a", -1);
  testLastFindIndex(" arry with one element", ["a"], "a", 0);
  testLastFindIndex(" arry with 2 elements", [1, "a", "a"], "a", 2);
  testLastFindIndex("given element is not in array", [1, "a", "a"], "b", -1);
}

testAll();