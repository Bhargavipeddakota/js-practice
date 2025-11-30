function endsWith(string, substring) {
  let substringLength = substring.length;
  const startRange = string.length - substringLength;
  let slicedString = "";
  for (let index = startRange; index < string.length; index++) {
    slicedString = slicedString + string[index];
  }
  return slicedString === substring;
}
function generateEmoji(expectedValue, actualvalue) {
  let check = (actualvalue === expectedValue) ? "✅ " : "❌ ";
  return check;
}
function testEndsWith(string, substring, expectedOutput) {
  let actualOutput = endsWith(string, substring);
  console.log(generateEmoji(actualOutput, expectedOutput) + "expectedOutput -> ", expectedOutput, "actualOutput ->", actualOutput);
}
testEndsWith("hello", "lo", true);
testEndsWith("hello", "he", false);
testEndsWith("hello world", "rld", true);
testEndsWith("hello world", "rld ", false);
testEndsWith("good morning ", "rld ", false);
