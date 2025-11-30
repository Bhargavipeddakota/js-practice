function hasFactors(primeCandidate, divisor) {
  if (primeCandidate % divisor === 0 && divisor > 1) {
    return true;
  }
  if (divisor === 1) {
    return false;
  }
  return hasFactors(primeCandidate, divisor - 1);
}
function isPrime(primeCandidate) {
  if (!hasFactors(primeCandidate, primeCandidate - 1)) {
    return primeCandidate;
  }
  return isPrime(primeCandidate + 1);
}
function firstPrimeAbove(number) {
  return isPrime(number + 1);
}
function generateEmoji(expectedValue, actualValue) {
  const isEqual = (actualValue === expectedValue) ? "✅ " : "❌ ";
  return isEqual;
}
function testFirstPrimeAbove(number, expectedOutput) {
  const actualOutput = firstPrimeAbove(number);
  const emoji = generateEmoji(actualOutput, expectedOutput);
  const preffix = "expectedOutput -> " + expectedOutput;
  console.log(emoji + preffix, "actualOutput ->", actualOutput);
}
testFirstPrimeAbove(2, 3);
