function multiply(multiplier, multiplicand) {
  if (multiplier === 0) {
    return 0;
  }
  return multiplicand + multiply(multiplier - 1, multiplicand);
}
function generateEmoji(expectedValue, actualvalue) {
  const isEqual = (actualvalue === expectedValue) ? "✅ " : "❌ ";
  return isEqual;
}
function testmultiply(multiplier, multiplicand, expectedOutput) {
  const actualOutput = multiply(multiplier, multiplicand);
  const emoji = generateEmoji(actualOutput, expectedOutput);
  const preffix = "expectedOutput -> " + expectedOutput;
  console.log(emoji + preffix, "actualOutput ->", actualOutput);
}

testmultiply(2, 3, 6);
testmultiply(3, 2, 6);
testmultiply(2, 1, 2);
testmultiply(1, 2, 2);
testmultiply(2, 2, 4);
testmultiply(2, -1, -2);
testmultiply(2, 0, 0);
testmultiply(0, 0, 0);
