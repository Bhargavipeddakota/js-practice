function simpleInterset(p, t, r) {
  return p * t * r / 100;
}
function generateEmoji(expectedValue, actualvalue) {
  let check = (actualvalue === expectedValue) ? "✅ " : "❌  ";
  return check;
}
function generateMessage(expectedValue, actualvalue) {
  const emoji = generateEmoji(expectedValue, actualvalue);
  return emoji + " expectedOutput ->  " + expectedValue + "   actualOutput ->  " + actualvalue;
}
function testSimpleInterest(p, t, r, expectedValue) {
  const actualvalue = simpleInterset(p, t, r);
  console.log(generateMessage(expectedValue, actualvalue));
}
function callTestFunction() {
  testSimpleInterest(0, 1, 2, 0);
  testSimpleInterest(1000, 1, 100, 1000);
  testSimpleInterest(100, 1, 10, 10);
}
callTestFunction();
