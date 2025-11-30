/*
  Implement the below function to trim(remove all leading and trailing 
  whitespaces) from the given sentence.
  A whitespace is SPACE(" "), NEW LINE("\n"), TAB("\t")
  Examples:
  reverseString(" hello world\n") returns "hello world"
*/
function trimleadingspace(sentence) {
  for (let index = 0; index < sentence.length; index++) {
    if (sentence[index] !== " " && sentence[index] !== "\n" && sentence[index] !== "\t") {
      return index;
    }
  }
}
function trimtrailingspace(sentence) {
  for (let index = sentence.length - 1; index > 0; index--) {
    if (sentence[index] !== " " && sentence[index] !== "\n" && sentence[index] !== "\t") {
      return index;
    }
  }
}
function trim(sentence) {
  let trimedString = "";
  let resultString = "";
  let index = trimleadingspace(sentence);
  while (index < sentence.length) {
    trimedString = trimedString + sentence[index];
    index++;
  }
  index = trimtrailingspace(trimedString);
  for (let term = 0; term <= index; term++) {
    resultString = resultString + trimedString[term];
  }
  return resultString;
}
function generateEmoji(expectedValue, actualvalue) {
  const isEqual = (actualvalue === expectedValue) ? "✅ " : "❌ ";
  return isEqual;
}
function testTrim(sentence, expectedOutput) {
  const actualOutput = trim(sentence);
  const emoji = generateEmoji(actualOutput, expectedOutput);
  const preffix = "expectedOutput -> " + expectedOutput;
  console.log(emoji + preffix, "actualOutput ->", actualOutput);
}
testTrim(" ha i ", "ha i");
testTrim("ha i\n", "ha i");
testTrim("\tha i  \n", "ha i");