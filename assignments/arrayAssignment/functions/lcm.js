function findMaxValue(a, b) {
  return (a > b) ? a : b;
}
function calculateLcm(a, b) {
  if( a === 0 || b === 0){
    return 0;
  }
  let multiple = findMaxValue(a, b);
  let isCommonMultiple = false;
  while (!isCommonMultiple) {
    if (multiple % a === 0 && multiple % b === 0) {
      isCommonMultiple = true;
      multiple--;
    }
    multiple++;
  }
  return multiple;
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
  let actualValue = calculateLcm(a, b);
  console.log(generateMessage(expectedValue, actualValue))
}
testCalculateHcf(12, 18, 36);
testCalculateHcf(1, 2, 2);
testCalculateHcf(12, 6, 12);
testCalculateHcf(4, 6, 12);
testCalculateHcf(0, 0, 0);
