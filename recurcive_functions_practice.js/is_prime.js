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
  if (primeCandidate < 2) {
    return false;
  }
  return (!hasFactors(primeCandidate, primeCandidate - 1));
}
function generateEmoji(expectedValue, actualvalue) {
  const isEqual = (actualvalue === expectedValue) ? "✅ " : "❌ ";
  return isEqual;
}

function testIsPrime(primeCandidate, expectedOutput) {
  const actualOutput = isPrime(primeCandidate);
  const emoji = generateEmoji(actualOutput, expectedOutput);
  const preffix = "expectedOutput -> " + expectedOutput;
  console.log(emoji + preffix, "actualOutput ->", actualOutput);
}
testIsPrime(1, false);
testIsPrime(2, true);
testIsPrime(3, true);
testIsPrime(4, false);
testIsPrime(5, true);
testIsPrime(6, false);
testIsPrime(7, true);
testIsPrime(11, true);
testIsPrime(12, false);
testIsPrime(15, false);
testIsPrime(21, false);
testIsPrime(9, false);
testIsPrime(18, false);
