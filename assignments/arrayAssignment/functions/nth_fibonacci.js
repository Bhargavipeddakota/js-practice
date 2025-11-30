function nthFibonacci(n) {
  let firstTerm = 0;
  let secondTerm = 1;
  let thirdTerm = 1;
  if (n === 1) {
    return firstTerm;
  }
  if (n !== 0 && n !== 1) {
    for (let count = 0; count <= n - 3; count++) {
      thirdTerm = firstTerm + secondTerm;
      firstTerm = secondTerm;
      secondTerm = thirdTerm;
    }
    return thirdTerm;
  }
}
function generateEmoji(expectedValue, actualvalue) {
  let check = (actualvalue === expectedValue) ? "✅ " : "❌ ";
  return check;
}
function generateMessage(expectedValue, actualvalue) {
  const emoji = generateEmoji(expectedValue, actualvalue);
  return emoji + " expectedOutput ->  " + expectedValue + "   actualOutput ->  " + actualvalue;
}
function testfactorial(n, expectedValue) {
  const actualvalue = nthFibonacci(n);
  console.log(generateMessage(expectedValue, actualvalue));
}
testfactorial(5, 3);
testfactorial(1, 0);
testfactorial(2, 1);

