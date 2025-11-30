function hasFactors(a){
  for (let divisor = 2; divisor < a; divisor++) {
     if(a % divisor === 0){
      return true;
     }
    }
    return false;
  }
function isPrime(a) {
  if (a === 1 || a == 0) {
    return false;
  }
   const isPrimeNumber = !hasFactors(a);
  return isPrimeNumber;
}
function generateEmoji(expectedValue, actualvalue) {
  let check = (actualvalue === expectedValue) ? "✅ " : "❌ ";
  return check;
}
function generateMessage(expectedValue, actualvalue) {
  const emoji = generateEmoji(expectedValue, actualvalue);
  return emoji + " expectedOutput ->  " + expectedValue + "   actualOutput ->  " + actualvalue;
}
function testIsPrime(a,expectedValue) {
  let actualValue = isPrime(a);
  console.log(generateMessage(expectedValue,actualValue));
}
function callTestIsPrime(){
  testIsPrime(2,true);
  testIsPrime(3,true);
  testIsPrime(4,false);
  testIsPrime(5,true);
  testIsPrime(7,true);
  testIsPrime(9,false);
  testIsPrime(12,false);
}
callTestIsPrime();