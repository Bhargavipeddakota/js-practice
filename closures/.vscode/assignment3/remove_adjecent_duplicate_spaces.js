function removeAdjacentDuplicateSpaces(sentence) {
  let updatedString = "";

  for (let index = 0; index < sentence.length; index++) {
    if (sentence[index] !== " ") {
      updatedString = updatedString + sentence[index]
    }
    else if (sentence[index - 1] !== " ") {
      updatedString = updatedString + sentence[index]
    }
  }
  
  return updatedString;
}
function generateEmoji(expectedValue, actualvalue) {
  const isEqual = (actualvalue === expectedValue) ? "✅ " : "❌ ";
  return isEqual;
}
function testRADS(sentence, expectedOutput) {
  const actualOutput = removeAdjacentDuplicateSpaces(sentence);
  const emoji = generateEmoji(actualOutput, expectedOutput);
  const preffix = "expectedOutput -> " + expectedOutput;
  console.log(emoji + preffix, "actualOutput ->", actualOutput);
}
testRADS("", "");
testRADS("hai", "hai");
testRADS("hai  ", "hai ");
testRADS("  hai", " hai");
testRADS("  h ai", " h ai");
testRADS("  h  ai", " h ai");
testRADS("   hello   world", " hello world");