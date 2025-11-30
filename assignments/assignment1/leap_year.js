const year = 2024;
const isDivisibleByFour = year % 4 === 0;
const isDivisibleByHundred = year % 100 === 0;
const isDivisibleByFourHundred = year % 400 === 0;
const isLeapYear = (isDivisibleByFour && (!isDivisibleByHundred)) || isDivisibleByFourHundred;
console.log(isLeapYear);
