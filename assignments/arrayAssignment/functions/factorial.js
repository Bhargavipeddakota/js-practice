function factorial(n) {
  let product = 1;
  for (let count = 1; count <= n; count++) {
    product = product * count;
  }
  return product;
}
function generateEmoji(expectedValue, actualvalue) {
  let check = (actualvalue === expectedValue) ? "✅ " : "❌ ";
  return check;
}
function generateMessage(expectedValue, actualvalue) {
  const emoji = generateEmoji(expectedValue, actualvalue);
  return emoji + " expectedOutput ->  " + expectedValue + "   actualOutput ->  " + actualvalue;
}
function testfactorial(n,expectedValue) {
  const actualvalue = factorial(n);
  console.log(generateMessage(expectedValue,actualvalue));
}
function calltestFactorial(){
testfactorial(5,120);
testfactorial(4,24);
testfactorial(3,6);
testfactorial(2,2);
testfactorial(1,1);
testfactorial(0,1);
}
calltestFactorial();