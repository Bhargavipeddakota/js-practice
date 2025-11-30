function fibonacciTerm(previousTerm, currentTerm, n) {
  if (n === 1) {
    return previousTerm;
  }
  return fibonacciTerm(currentTerm, previousTerm + currentTerm, n - 1);
}
function nthFibonacciTerm(n) {
  return fibonacciTerm(0, 1, n);
}
function generateEmoji(expectedValue, actualValue) {
  const isEqual = (actualValue === expectedValue) ? "✅ " : "❌ ";
  return isEqual;
}
function testNthFibonacciTerm(n, expectedOutput) {
  const actualOutput = nthFibonacciTerm(n);
  const emoji = generateEmoji(actualOutput, expectedOutput);
  const preffix = "expectedOutput -> " + expectedOutput;
  console.log(emoji + preffix, "actualOutput ->", actualOutput);
}
testNthFibonacciTerm(1, 0);
testNthFibonacciTerm(2, 1);
testNthFibonacciTerm(3, 1);
testNthFibonacciTerm(6, 5);
testNthFibonacciTerm(7, 8);
