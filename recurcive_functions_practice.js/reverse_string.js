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
function generateEmoji(expectedValue, actualValue) {
  const isEqual = (actualValue === expectedValue) ? "✅ " : "❌ ";
  return isEqual;
}
function testreverse(number, expectedOutput) {
  const actualOutput = reverse(number);
  const emoji = generateEmoji(actualOutput, expectedOutput);
  const preffix = "expectedOutput -> " + expectedOutput;
  console.log(emoji + preffix, "actualOutput ->", actualOutput);
}
testreverse("abc", "cba");
testreverse("123", "321");