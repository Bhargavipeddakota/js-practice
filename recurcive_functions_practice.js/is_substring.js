function isSubStringFound(text, subString, textIndex, index) {
  if (index >= subString.length) {
    return true;
  }
  if (textIndex >= text.length) {
    return false;
  }
  if (text[textIndex] === subString[index]) {
    return isSubStringFound(text, subString, textIndex + 1, index + 1);
  }
  textIndex = textIndex - index;
  return isSubStringFound(text, subString, textIndex + 1, 0);
}
function isSubStringAt(text, subString, textIndex) {
  const index = 0;
  if (textIndex >= text.length) {
    return false;
  }
  if (text[textIndex] !== subString[index]) {
    return isSubStringAt(text, subString, textIndex + 1);
  }
  return isSubStringFound(text, subString, textIndex, index);
}
function isSubString(string, otherString) {
  if (string.length < otherString.length) {
    return false;
  }
  return isSubStringAt(string, otherString, 0);
}
function generateEmoji(expectedValue, actualValue) {
  const isEqual = (actualValue === expectedValue) ? "✅ " : "❌ ";
  return isEqual;
}
function testisSubString(string, char, expectedOutput) {
  const actualOutput = isSubString(string, char);
  const emoji = generateEmoji(actualOutput, expectedOutput);
  const preffix = "expectedOutput -> " + expectedOutput;
  console.log(emoji + preffix, "actualOutput ->", actualOutput);
}
testisSubString("abc", "a", true);
testisSubString("bca", "c", true);
testisSubString("abc", "d", false);
testisSubString("hello world", " orl", false);
testisSubString("hello", "hello world", false);
testisSubString("oorl", "orl", true);
testisSubString("hellororl", "", false);
testisSubString("hello ", "eo", false);
testisSubString("not found", "for",false);