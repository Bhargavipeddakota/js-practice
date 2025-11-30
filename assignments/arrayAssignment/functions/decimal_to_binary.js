function division(n, r) {
  return (n - r) / 2;
}
function convertToBinary(n) {
  let reminder = 0;
  let quotient = n;
  let binarynumber = 0;
  let placeValue = 1;
  while (quotient > 0) {
    reminder = quotient % 2;
    binarynumber = reminder * placeValue + binarynumber;
    quotient = division(quotient, reminder);
    placeValue = placeValue * 10;
  }
  return binarynumber;
}
function generateEmoji(expectedValue, actualvalue) {
  let check = (actualvalue === expectedValue) ? "✅ " : "❌ ";
  return check;
}
function generateMessage(n, expectedValue, actualvalue) {
  const emoji = generateEmoji(expectedValue, actualvalue);
  const preffix = "binaryConversion of  " + n + "  expectedOutput ->  " + expectedValue;
  const suffix = "   actualOutput -> " + actualvalue;
  return emoji + preffix + suffix;
}
function testConvertToBinary(n, expectedValue) {
  const actualvalue = convertToBinary(n)
  console.log(generateMessage(n, expectedValue, actualvalue));
}
function callTestFunctions() {
  testConvertToBinary(2, 10);
  testConvertToBinary(3, 11);
  testConvertToBinary(4, 100);
  testConvertToBinary(21, 10101);
}
callTestFunctions();