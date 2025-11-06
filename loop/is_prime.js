const a = 0;
let itHasFactor = false;
for (let divisor = 2; divisor < a; divisor++) {
  if (a % divisor === 0) {
    itHasFactor = true;
  }
}
const isZeroOrOne = (a === 1 || a === 0);
const isPrime = (itHasFactor || isZeroOrOne) ? false : true;
console.log(isPrime);
