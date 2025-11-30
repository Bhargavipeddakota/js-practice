function sumOfAP(a, d, n) {

  if (n === 0) {
    return 0;
  }

  return a + sumOfAP(a + d, d, n-1);
}

function generateEmoji(expectedValue, actualValue) {
  const isEqual = (actualValue === expectedValue) ? "✅ " : "❌ ";
  return isEqual;
}

function testSumOfAp(a, d, n, expectedOutput) {
  const actualOutput = sumOfAP(a, d, n);
  const emoji = generateEmoji(actualOutput, expectedOutput);
  const preffix = "expectedOutput -> " + expectedOutput;
  console.log(emoji + preffix, "actualOutput ->", actualOutput);
}

testSumOfAp(0, 1, 2, 1);
testSumOfAp(2, 2, 5, 30);
testSumOfAp(0, 2, 5, 20);
testSumOfAp(0, 2, 5, 20);
