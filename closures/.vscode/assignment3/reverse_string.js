/*
  Implement the below function to reverse the given sentence.
  Examples:
  reverseString("hello") returns "hello"
*/

function reverseString(sentence) {
  
  let reversedString = "";
  const starIndex = sentence.length - 1;

  for (let index = starIndex; index >= 0; index--) {
    reversedString = reversedString + sentence[index];
  }

  return reversedString;
}
function generateEmoji(expectedValue, actualvalue) {
  const isEqual = (actualvalue === expectedValue) ? "✅ " : "❌ ";
  return isEqual;
}
function testreverseString(sentence, expectedOutput) {
  const actualOutput = reverseString(sentence);
  const emoji = generateEmoji(actualOutput, expectedOutput);
  const preffix = "expectedOutput -> " + expectedOutput;
  console.log(emoji + preffix, "actualOutput ->", actualOutput);
}
testreverseString("", "");
testreverseString("a", "a");
testreverseString("ab", "ba");
testreverseString("abc", "cba");
testreverseString("abb", "bba");
testreverseString("hello", "olleh");
testreverseString("123", "321");