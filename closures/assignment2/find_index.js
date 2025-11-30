function findIndex(text, target) {
  let index;
  for (index = 0; index < text.length; index++) {
    if (text[index] === target) {
      return index;
    }
  }
  return -1;
}
function generateEmoji(expectedValue, actualvalue) {
  let check = (actualvalue === expectedValue) ? "✅ " : "❌ ";
  return check;
}
function testSubstring(text, target, expectedOutput) {
  let actualOutput = findIndex(text, target);
  let emoji = generateEmoji(actualOutput, expectedOutput);
  let preffix = "expectedOutput -> " + expectedOutput;
  console.log(emoji + preffix, "actualOutput ->", actualOutput);
}
testSubstring("hello", "l", 2);
testSubstring("repeating iiiiii","i",6);
testSubstring("hello world", "q", -1);
testSubstring("", "l", -1);

