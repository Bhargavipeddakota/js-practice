function isVowel(letter) {
  const vowels = "aeiou";
  for (let index = 0; index < vowels.length; index++) {
    if (vowels[index] === letter) {
      return true;
    }
  }
  return false;
}
function getConsonent(index, word) {
  for (let term = index + 1; term < word.length; term++) {
    if (!isVowel(word[term])) {
      return word[term];
    }
  }
  return ",";
}
function getVowel(index, word) {
  for (let term = index + 1; term < word.length; term++) {
    if (isVowel(word[term])) {
      return word[term];
    }
  }
  return ",";
}
function isInString(letter, string) {
  for (let index = 0; index < string.length; index++) {
    if (string[index] === letter) {
      return true;
    }
  }
  return false;
}
function spliting(word) {
  if (word === "") {
    return "";
  }
  let used = "";
  let string = "";
  for (let index = 0; index < word.length; index++) {
    string = string + word[index];
    used = word[index];
    if (isVowel(word[index]) && !isInString(word[index],used)) {
      const consonent = getConsonent(index, word);
      const isExisted = isInString(consonent, string);
      if (word[index + 1] !== consonent && consonent !== "," && !isExisted) {
        string = string + consonent + ",";
        used = used+word[index];
      }
    } else {
      let vowel = getVowel(index, word);
      let isExisted = isInString(vowel, string);
      if (word[index + 1] !== vowel && vowel !== "," && !isExisted) {
        string = string + vowel + ",";
        used = used+word[index];
      }
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
testSpliting('a', "a");
testSpliting('ab', "ab");
testSpliting('banana', "banana");
testSpliting('abeyss', "abey,s,s");
testSpliting('apple', "ape,p,l");
testSpliting('there', "tere,h");