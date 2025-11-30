function findMinValue(a, b) {
  return a < b ? a : b;
}
function calculateHcf(a,b) {
  let hcf = 1;
  if (a === 0 && b === 0) {
    hcf = 0;
  }
  let smallerValue = findMinValue(a,b);
  for (let factor = 1; factor <= smallerValue; factor++) {
    if (a % factor === 0 && b % factor === 0) {
      hcf = factor;
    }
  }
  return hcf;
}
function generateEmoji(expectedValue, actualvalue) {
  let check = (actualvalue === expectedValue) ? "✅ " : "❌ ";
  return check;
}
function generateMessage(expectedValue, actualvalue) {
  const emoji = generateEmoji(expectedValue, actualvalue);
  return emoji + " expectedOutput ->  " + expectedValue + "   actualOutput ->  " + actualvalue;
}
function testCalculateHcf(a, b, expectedValue) {
  let actualValue = calculateHcf(a, b);
  console.log(generateMessage(expectedValue, actualValue))
}
testCalculateHcf(12, 18, 6);
testCalculateHcf(1, 2, 1);
testCalculateHcf(12, 6, 6);
testCalculateHcf(4, 6, 2);
testCalculateHcf(0, 0, 0);