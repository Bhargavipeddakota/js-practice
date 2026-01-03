const a = 101;
const subString = 1;
let frequncy = 0;
let copyNumber = a;
let copySubString = subString;
while (copySubString > 0) {
  let reminder = copySubString % 10;
  while (copyNumber > 0) {
    let lastDigit = copyNumber % 10;
    if (lastDigit === subString) {
      frequncy++;
    }
    copyNumber = (copyNumber - lastDigit) / 10
  }
}
console.log(frequncy);
