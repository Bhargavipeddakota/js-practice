function remainder(dividend, divisor) {
  if (dividend < divisor) {
    return dividend;
  }
    return remainder(dividend - divisor, divisor);
}

function generateEmoji(expectedValue, actualvalue) {
  const isEqual = (actualvalue === expectedValue) ? "✅ " : "❌ ";
  return isEqual;
}

function testremainder(dividend, divisor, expectedOutput) {
  const actualOutput = remainder(dividend, divisor);
  const emoji = generateEmoji(actualOutput, expectedOutput);
  const preffix = "expectedOutput -> " + expectedOutput;
  console.log(emoji + preffix, "actualOutput ->", actualOutput);
}
testremainder(6, 2, 0);
testremainder(2, 1, 0);
testremainder(5, 3, 2);