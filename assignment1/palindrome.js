const a = 122;
let reverseNumber = 0;
let copyNumber = a;
let lastDigit = 0;
while (copyNumber > 0) {
  lastDigit = copyNumber % 10;
  copyNumber = (copyNumber - lastDigit) / 10;
  reverseNumber = reverseNumber * 10 + lastDigit;
}
let isPalindrome = (reverseNumber === a) ? true : false;
console.log(isPalindrome);
