/*
  Implement the below function to count the number of words
  in the given sentence.

  Rules:
  - A word is defined as a sequence of non-whitespace characters.
  - Whitespace includes SPACE(" "), TAB("\t"), and NEW LINE("\n").
  - Multiple consecutive whitespace characters should be treated
    as a single separator.
  - Leading and trailing whitespace should not affect the word count.

  Example:
  countWords("hello   \t   world \n test")
    -> 3
*/
function trimleadingspace(sentence) {
  let trimedString = "";
  for (let index = 0; index < sentence.length; index++) {
    const char =sentence[index];
    if ( !isWhiteSpace(char)) {
      return index;
    }
  }
}

function trimtrailingspace(sentence) {
  for (let index = sentence.length - 1; index > 0; index--) {
    const char =sentence[index];
    if (!isWhiteSpace(char)) {
      return index;
    }
  }
}

function isWhiteSpace(char){
 return char === " " || char === "\n" || char === "\t"
}

function countWords(sentence) {
  if(sentence === ""){
    return 0;
  }
  let count = 0;
  let isInWord = false;
  const startRange = trimleadingspace(sentence);
  const endRange = trimtrailingspace(sentence);
  for(let index = startRange;index <= endRange;index++){
    const char = sentence[index];
    if(!isWhiteSpace(char) && !isInWord){
      count ++;
    }
    isInWord = !isWhiteSpace(char);
  }
  return count;
}
function generateEmoji(expectedValue, actualvalue) {
  const isEqual = (actualvalue === expectedValue) ? "✅ " : "❌ ";
  return isEqual;
}
function testCountWords(sentence, expectedOutput) {
  const actualOutput = countWords(sentence);
  const emoji = generateEmoji(actualOutput, expectedOutput);
  const preffix = "expectedOutput -> " + expectedOutput;
  console.log(emoji + preffix, "actualOutput ->", actualOutput);
}
testCountWords("",0);
testCountWords("h a",2);
testCountWords("good morning",2);
testCountWords("h\ta\ni",3);
testCountWords(" h\ta\ni ",3);
testCountWords("a quick brown fox jumps over the lazy ",8);
testCountWords("  a b",2);
testCountWords("  a   b",2);

