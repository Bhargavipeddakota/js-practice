/*
  Implement the below function to count number of vowels present in the
  give sentence.
  Examples:
  countVowels("hello world") returns 3
  countVowels("hEllo wOrld") returns 3
*/
function isVowel(letter) {
  const vowels = "aeiouAEIOU";
  for (let index = 0; index < vowels.length; index++) {
    if (vowels[index] === letter) {
      return true;
    }
  }
  return false;
}
function countVowels(sentence) {
  let count = 0;
  for (let index = 0; index < sentence.length; index++)
    if (isVowel(sentence[index])) {
      count++;
    }
  return count;
}

function generateEmoji(expectedValue, actualvalue) {
  const isEqual = (actualvalue === expectedValue) ? "✅ " : "❌ ";
  return isEqual;
}
function testcountVowels(sentence, expectedOutput) {
  const actualOutput = countVowels(sentence);
  const emoji = generateEmoji(actualOutput, expectedOutput);
  const preffix = "expectedOutput -> " + expectedOutput;
  console.log(emoji + preffix, "actualOutput ->", actualOutput);
}
testcountVowels("", 0);
testcountVowels("a", 1);
testcountVowels("a", 1);
testcountVowels("ab", 1);
testcountVowels("aba", 2);
testcountVowels("aeiou", 5);
testcountVowels("hello world", 3);
testcountVowels("hEllo wOrld", 3);
testcountVowels("aaaa", 4);
testcountVowels("bbbb", 0);

