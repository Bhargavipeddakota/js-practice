function findingIndex(string, char, index) {
  if (string[index] === char) {
    return index;
  }
  if (index < 0) {
    return -1;
  }
  return findingIndex(string, char, index - 1);
}
function findLastIndex(string, char) {
  const index = string.length - 1;
  return findingIndex(string, char, index);
}
function generateEmoji(expectedValue, actualValue) {
  const isEqual = (actualValue === expectedValue) ? "✅ " : "❌ ";
  return isEqual;
}
function testFindLastIndex(string, char, expectedOutput) {
  const actualOutput = findLastIndex(string, char);
  const emoji = generateEmoji(actualOutput, expectedOutput);
  const preffix = "expectedOutput -> " + expectedOutput;
  console.log(emoji + preffix, "actualOutput ->", actualOutput);
}
testFindLastIndex("abc", "a", 0);
testFindLastIndex("abac", "a", 2);
testFindLastIndex("abac", "a", 2);