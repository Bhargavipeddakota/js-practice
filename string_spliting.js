function isVowel(letter) {
  const isA = letter === 'a';
  const isE = letter === 'e';
  const isI = letter === 'i';
  const isO = letter === 'o';
  const isU = letter === 'u';
  return isA || isE || isI || isO || isU;
}
function getConsonent(index, word) {
  for (let term = index + 1; term < word.length; term++) {
    if (!isVowel(word[term])) {
      return word[term]
    } 
  }
  return "," ;
}
function getVowel(index, word) {
  for (let term = index + 1; term < word.length; term++) {
    if (isVowel(word[term])) {
      return word[term]
    }
  }
  return ",";
}
function spliting(word) {
  if( word === "")
  {
    return "";
  }
  let string = word[0];
  for (let index = 0; index < word.length; index++) {
    if (isVowel(word[index])) {
      let consonent = getConsonent(index, word);
      string = string + consonent;
    } else {
      let vowel = getVowel(index, word);
      string = string + vowel;
    }
  }
  return string;
}
function generateEmoji(expectedValue, actualvalue) {
  let check = (actualvalue === expectedValue) ? "✅ " : "❌ ";
  return check;
}
function testSpliting(word, expectedOutput) {
  let actualOutput = spliting(word);
  console.log(generateEmoji(actualOutput, expectedOutput) + "expectedOutput -> ", expectedOutput, "actualOutput ->", actualOutput);
}
testSpliting('', "");
testSpliting('a', "a,");
testSpliting('ab', "ab,");
testSpliting('banana', "banana,");
testSpliting('abeyss', "abe,y,s,s,");
testSpliting('apple', "ape,p,l");
