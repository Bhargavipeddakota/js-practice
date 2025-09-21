const number = 30
let reverseNumber = 0;
let copyNumber = number;
let lastDigit = 0;
while(copyNumber > 0) {
  lastDigit = copyNumber % 10;
  copyNumber = (copyNumber-lastDigit)/10;
  reverseNumber =  reverseNumber * 10 + lastDigit;
}
console.log("reverse of", number,"=>",reverseNumber);
 
