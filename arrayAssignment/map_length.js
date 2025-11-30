// Given an array containing words, return a new array containing length of
// the words.
// mapLengths(["apple", "cat", "Four"]) => [5, 3, 4]
// do not modify input parameters
function mapLengths(words) {
  const wordLengths = [];

  for (let index = 0; index < words.length; index++) {
    wordLengths.push(words[index].length);
  }

  return wordLengths;
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
  const actual = mapLengths(array);
  console.log(composeMsg(description, array, actual, expected));
}

function testAll() {
  testmapLength("array with 1 elememts", ["a"], [1]);
  testmapLength("array with 1 elememts with length 2", ["ab"], [2]);
  testmapLength("array with 2 elememts with length 2 & 3", ["ab", "abc"], [2, 3]);
}

testAll();