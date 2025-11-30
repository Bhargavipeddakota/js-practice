function occurrences(string, substring) {
  if (substring.length === 0) {
    return 0;
  }
  let count = 0;
  let endRange = string.length - substring.length;
  let index;
  for (let stringIndex = 0; stringIndex < string.length; stringIndex++) {
    let isSubstring = true;
    for (index = 0; index < substring.length; index++) {
      if (string[stringIndex + index] !== substring[index]) {
        isSubstring = false;
      }
    }
    if (isSubstring) {
      count++;
    }
  }
  return count;
}
function generateEmoji(expectedValue, actualvalue) {
  let isEqual = (actualvalue === expectedValue) ? "✅ " : "❌ ";
  return isEqual;
}
function convert(string, substring, expectedOutput) {
  let actualOutput = occurrences(string, substring);
  let emoji = generateEmoji(actualOutput, expectedOutput);
  let preffix = "expectedOutput -> " + expectedOutput;
  console.log(emoji + preffix, "actualOutput ->", actualOutput);
}
convert("a", '', 0);
convert("", "a", 0);
convert("aaa", 'a', 3);
convert("ab", 'ab', 1);
convert("ab", 'b', 1);
convert("abc", 'b', 1);
convert("abca", 'a', 2);
convert("abcab", 'ab', 2);
convert("abcdefabc", 'abc', 2);
convert('hello world', 'l', 3);
convert('hello world', 'll', 1);
convert('hello world', 'world', 1);
convert('hello world', 'zebra', 0);
convert("hahahaha", "haha", 3);
convert("I don't have case sensitive substring", "ubS", 0);