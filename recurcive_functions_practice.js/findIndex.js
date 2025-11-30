function findingIndex(string, char, index) {
    if (index >= string.length) {
    return -1;
  }
  if (string[index] === char) {
    return index;
  }
  return findingIndex(string, char, index + 1);
}
function findIndex(string, char) {
  const index = 0;
  return findingIndex(string, char, index);
}
function testFindIndex(type, string, subString, expected) {
  const actual = findIndex(string, subString);
  const isPass = actual === expected;
  const icon = isPass ? "✅" : "❌";
  let message = `\t${icon} ${type}\n`;

  message += isPass ? "" : `\t   | Input    : ${string} | ${subString}\n`;
  message += isPass ? "" : `\t   | Actual   : ${actual}`;
  message += isPass ? "" : `\n\t   | Expected : ${expected}\n`;

  console.log(message);
}

function testAllTestCases() {
  console.log('');
  testFindIndex("Empty String", "", "", -1);
  testFindIndex("Empty String", "", "a", -1);
  testFindIndex("Empty Sub String", "a", "", -1);

  testFindIndex("Single Character", "a", "a", 0);

  testFindIndex("Single Character not available", "a", "b", -1);

  testFindIndex("Bettween Character", "abcd", "b", 1);
  testFindIndex("Character in last", "abcde", "e", 4);
}

testAllTestCases();
