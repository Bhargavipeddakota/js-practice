const a = 0;
let checkingNumber = a + 1;
let isPrime = false;
while (!isPrime) {
  let itHasFactor = false;
  for (let divisor = 2; divisor < checkingNumber; divisor++) {
    if (checkingNumber % divisor === 0) {
      itHasFactor = true;
    }
  }
  isPrime = (!itHasFactor && checkingNumber !== 1);
  checkingNumber++;
}
const nextPrime = checkingNumber - 1;
console.log(nextPrime);