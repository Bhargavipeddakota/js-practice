/*
  Implement the below function to convert a string from snake_case
  format into camelCase format.

  Example:
  toCamelCase("hello_wORLd_pro1gram")
    -> "helloWorldPro1gram"
*/
function toUpperCase(character) {
  const lowerCaseAlphabets = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let index = 0; index < lowerCaseAlphabets.length; index++) {
    if(lowerCaseAlphabets[index] === character){
      return upperCaseAlphabets[index];
    }
  }
  return character;
}
function toLowerCase(character) {
  const lowerCaseAlphabets = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let index = 0; index < lowerCaseAlphabets.length; index++) {
    if(upperCaseAlphabets[index] === character){
      return lowerCaseAlphabets[index];
    }
  }
  return "";
}
function toFindAlphabeta(index,sentence){
  for (let term = index; term < sentence.length;term++){
    if(sentence[term] !== "_"){
      return term;
    }
  }
  return "";
}
function toCamelCase(sentence) {
  let nextUpperCaseLetter = "";
  let camelCaseString = "";
  let prevchar = "";
  for (let index = 0; index < sentence.length; index++) {
   prevchar = sentence[index -1];
    if (sentence[index] === "_") {
      index = toFindAlphabeta(index,sentence)
      nextUpperCaseLetter = toUpperCase(sentence[index]);
      camelCaseString = camelCaseString + nextUpperCaseLetter;
    }
    else {
      camelCaseString = camelCaseString + sentence[index];
    }
  }
  return camelCaseString;
}
function generateEmoji(expectedValue, actualvalue) {
  const isEqual = (actualvalue === expectedValue) ? "✅ " : "❌ ";
  return isEqual;
}
function testToCamelCase(sentence, expectedOutput) {
  const actualOutput = toCamelCase(sentence);
  const emoji = generateEmoji(actualOutput, expectedOutput);
  const preffix = "expectedOutput -> " + expectedOutput;
  console.log(emoji + preffix, "actualOutput ->", actualOutput);
}
testToCamelCase("hello_world_hai", "helloWorldHai");
testToCamelCase("____", "");
testToCamelCase("__b", "aB");
testToCamelCase("a__b", "aB");
testToCamelCase("aB_cDE", "abCde");