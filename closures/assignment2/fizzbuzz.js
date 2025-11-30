function isDivisibleBy3(number) {
   return number % 3 === 0;
}
function isDivisibleBy5(number) {
  return number % 5 === 0;
}
function fizzBuzz(number) {
  if(isDivisibleBy3(number) && isDivisibleBy5(number)){
  return "fizzbuzz";
  }
  if (isDivisibleBy3(number)) {
    return "fizz";
  }
  if (isDivisibleBy5(number)) {
    return "buzz";
  }
  return number;
}
function generateEmoji(expectedValue, actualvalue) {
  let isEqual = (actualvalue === expectedValue) ? "✅ " : "❌ ";
  return isEqual;
}
function testFizzBuzz(number, expectedOutput) {
  let actualOutput = fizzBuzz(number);
  let emoji = generateEmoji(actualOutput, expectedOutput);
  let preffix = "expectedOutput -> " + expectedOutput;
  console.log(emoji + preffix, "actualOutput ->", actualOutput);
}
testFizzBuzz(15, "fizzbuzz");
testFizzBuzz(18, "fizz");
testFizzBuzz(7, 7);
testFizzBuzz(21, "fizz");
testFizzBuzz(45, "fizzbuzz");

