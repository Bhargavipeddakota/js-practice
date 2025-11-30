function quotient(dividend, divisor) {
  if (dividend === 0) {
    return 0;
  }
  return 1 + quotient(dividend - divisor, divisor);
} 

function generateEmoji(expectedValue, actualvalue) {
  const isEqual = (actualvalue === expectedValue) ? "✅ " : "❌ ";
  return isEqual;
}

function testquotient(dividend, divisor, expectedOutput) {
  const actualOutput = quotient(dividend, divisor);
  const emoji = generateEmoji(actualOutput, expectedOutput);
  const preffix = "expectedOutput -> " + expectedOutput;
  console.log(emoji + preffix, "actualOutput ->", actualOutput);
}
testquotient(6, 2, 3);
testquotient(0, 2, 0);