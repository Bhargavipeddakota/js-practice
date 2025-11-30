function charToDigit(char, index) {
  const digits = "0123456789";
  if (char === digits[index]) {
    return index;
  }
  return charToDigit(char, index + 1);
}

function toNumber(string, index, number) {

  if (index === string.length) {
    return number;
  }
  number = number * 10 + charToDigit(string[index], 0);

  return toNumber(string, index + 1, number);
}

function stringToNumber(string) {
  let index = 0;
  let number = 0;

  if (string[0] === "-") {
    index = 1;
    number = ("-" + toNumber(string, index, number)) * 1;

    return number;
  }

  return toNumber(string, index, number);
}

function generateEmoji(expectedValue, actualValue) {

  const isEqual = (actualValue === expectedValue) ? "✅ " : "❌ ";

  return isEqual;
}

function testStringToNumber(string, expectedOutput) {

  const actualOutput = stringToNumber(string);
  const emoji = generateEmoji(actualOutput, expectedOutput);
  const preffix = "expectedOutput -> " + expectedOutput;

  console.log(emoji + preffix, "actualOutput ->", actualOutput);
}

testStringToNumber("1", 1);
testStringToNumber("0", 0);
testStringToNumber("12", 12);
testStringToNumber("12", 12);
testStringToNumber("0", 0);
testStringToNumber("-1", -1);