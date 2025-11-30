// Given a string and a single-character delimiter, returns an array of strings
// obtained by splitting the input string at each occurrence of the delimiter.
// The delimiter must be a single character.
// Examples:
// split("a,b,c", ",") => ["a", "b", "c"]
// split("one:two:three", ":") => ["one", "two", "three"]
// split("hello", ",") => ["hello"]

function split(sentence, delimiter) {
  if (sentence === "" || delimiter === "") {
    return [sentence];
  }

  const splittedSentence = [];
  let newsSentence = sentence;
  let subIndex = newsSentence.indexOf(delimiter);

  while (subIndex !== -1) {
    splittedSentence.push(newsSentence.slice(0, subIndex));
    newsSentence = newsSentence.slice(subIndex + 1, newsSentence.length);
    subIndex = newsSentence.indexOf(delimiter);
  }

  splittedSentence.push(newsSentence);
  return splittedSentence;
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

function composeMsg(description, sentence, delimiter, actual, expected) {
  const icon = generateEmoji(actual, expected);
  let message = `\t${icon} ${description}`;
  if (icon !== "✅") {
    message += `\n\t   | Input    : sentence: ${sentence} delimiter: ${delimiter}\n`;
    message += `\t   | Actual   : ${actual}\n`;
    message += `\t   | Expected : ${expected}\n`;
  }

  return message;
}

function testSplit(description, sentence, delimiter, expected) {
  const actual = split(sentence, delimiter);
  console.log(composeMsg(description, sentence, delimiter, actual, expected));
}

function testAll() {
  testSplit("empty string ", "", ",", [""]);
  testSplit("string contain 4 elements ", "a,b", ",", ["a", "b"]);
  testSplit("string contain 5 elements ", "a,b,c", ",", ["a", "b", "c"]);
  testSplit("string contain 5 elements ", "a,b,c", ",", ["a", "b", "c"]);
  testSplit("delimiter at last ", "a,b,c,", ",", ["a", "b", "c", ""]);
  testSplit("empty delimeter", "a,b,c", "", ["a,b,c"]);
  testSplit("both sentence and delimiter are empty", "", "", [""]);
  testSplit("empty delimeter", "", ",", [""]);
}

testAll();
