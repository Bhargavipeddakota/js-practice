function secondLargest(a, b, c) {
 const min1 = Math.max(a,b);
 const min2 = Math.min(a,c);
 return Math.max(min1,min2);
}
function generateEmoji(expectedValue, actualvalue) {
  let isEqual = (actualvalue === expectedValue) ? "✅ " : "❌ ";
  return isEqual;
}
function testsecondLargest(number, expectedOutput) {
  let actualOutput = secondLargest(number);
  let emoji = generateEmoji(actualOutput, expectedOutput);
  let preffix = "expectedOutput -> " + expectedOutput;
  console.log(emoji + preffix, "actualOutput ->", actualOutput);
}
console.log((secondLargest(20,10,30 )));
