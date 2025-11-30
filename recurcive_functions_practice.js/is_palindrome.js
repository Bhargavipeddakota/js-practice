function restOfString(string) {
  let restString = "";
  for (let index = 1; index < string.length; index++) {
    restString = restString + string[index];
  }
  return restString;
}
function first(string) {
  return string[0];
}
function reverse(string) {
  if (string === "") {
    return "";
  }
  return reverse(restOfString(string)) + first(string);
}
function isPalindrome(palindromeCandidate) {
  const reversedString = reverse(palindromeCandidate);

  return reversedString === palindromeCandidate;
}
function generateEmoji(expectedValue, actualValue) {
  const isEqual = (actualValue === expectedValue) ? "✅ " : "❌ ";
  return isEqual;
}
function testIsPalindrome(number, expectedOutput) {
  const actualOutput = isPalindrome(number);
  const emoji = generateEmoji(actualOutput, expectedOutput);
  const preffix = "expectedOutput -> " + expectedOutput;
  console.log(emoji + preffix, "actualOutput ->", actualOutput);
}
testIsPalindrome("madam", true);
testIsPalindrome("true", false);