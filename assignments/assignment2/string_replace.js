function replace(text, match, replacement) {
  let string = "";
  for (let index = 0; index < text.length; index++) {
    if (text[index] !== match) {
      string = string + text[index];
    } else {
      string = string + replacement;
    }
  }
  return string;
}
function generateEmoji(expectedValue, actualvalue) {
  let isEqual = (actualvalue === expectedValue) ? "✅ " : "❌ ";
  return isEqual;
}
function testreplace(text, match, replacement, expectedOutput) {
  let actualOutput = replace(text, match, replacement);
  let emoji = generateEmoji(actualOutput, expectedOutput);
  let preffix = "expectedOutput -> " + expectedOutput;
  console.log(emoji + preffix, "actualOutput ->", actualOutput);
}
testreplace("hello", "l", "m", "hemmo");
testreplace("hello world", " ", "_", "hello_world");
testreplace('', 'd', 'e', "");
testreplace('bhargavi', 'd', 'e', "bhargavi");