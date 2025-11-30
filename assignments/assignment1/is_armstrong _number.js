const a = 0;
let copyNumber = a;
let lastDigit = 0;
let sumOfCubes = 0;
const x = "" + a;
const noOfDigits = x.length;
while (copyNumber > 0) {
  lastDigit = copyNumber % 10;
  copyNumber = (copyNumber - lastDigit) / 10;
  sumOfCubes = sumOfCubes + lastDigit ** noOfDigits;
}
const isArmstrong = (sumOfCubes === a);
console.log(isArmstrong);