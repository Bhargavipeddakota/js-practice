function compoundInterest(p, t, r) {
  let newPrincipalAmount = p;
  for (let term = 1; term <= t; term++) {
    let simpleInterest = (newPrincipalAmount * r) / 100;
    newPrincipalAmount = newPrincipalAmount + simpleInterest;
  }
  const compoundInterest = newPrincipalAmount - p;
  return compoundInterest;
}
function approximateValue(actualValue, expectedValue) {
  let startRange = expectedValue - 0.5;
  let endRange = expectedValue + 0.5;
  return actualValue >= startRange && actualValue <= endRange;
}
function generateEmoji(expectedValue, actualvalue) {
  let check = (approximateValue(actualvalue, expectedValue)) ? "✅ " : "❌ ";
  return check;
}
function generateMessage(expectedValue, actualvalue) {
  const emoji = generateEmoji(expectedValue, actualvalue);
  return emoji + " expectedOutput ->  " + expectedValue + "   actualOutput ->  " + actualvalue;
}
function testCompoundInterest(p, t, r, expectedValue) {
  let actualvalue = compoundInterest(p, t, r);
  console.log(generateMessage(expectedValue, actualvalue));
}
function testAll(){
testCompoundInterest(100, 2, 10, 21);
testCompoundInterest(1000, 2, 10, 210);
testCompoundInterest(10, 2, 10, 2);
testCompoundInterest(500, 3, 10, 165);
testCompoundInterest(1, 2, 10, 0.2);
}
testAll();