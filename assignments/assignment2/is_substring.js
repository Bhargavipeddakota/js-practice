function isSubstring(string, subString) {
  if (string.length < subString.length) {
    return false;
  }
  let isSubstringFound = false;
  for (let stringIndex = 0; stringIndex < string.length; stringIndex++) {
    for (let index = 0; index < subString.length && stringIndex < string.length; index++) {
      if (string[stringIndex + index] === subString[index]) {
        isSubstringFound = true;
      }
      else {
        index--;
        stringIndex++;
      }
    }
  }
  return isSubstringFound;
}
function generateEmoji(expectedValue, actualvalue) {
  let isEqual = (actualvalue === expectedValue) ? "✅ " : "❌ ";
  return isEqual;
}
function testSubstring(string, substring, expectedOutput) {
  let actualOutput = isSubstring(string, substring);
  let emoji = generateEmoji(actualOutput, expectedOutput);
  let preffix = "expectedOutput -> " + expectedOutput;
  console.log(emoji + preffix, "actualOutput ->", actualOutput);
}
testSubstring("hello world", "hell", true);
testSubstring("hello world", "world", true);
testSubstring("hello world", "good", false);
testSubstring("hello ", "llo", true);
testSubstring("hello", "hello world", false);
testSubstring("helloorl", "orl", true);
testSubstring("hellororl", "orl", true);
testSubstring("hellororl", "", false);


