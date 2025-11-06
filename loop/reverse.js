const number = 101;
let reverseNumber = 0;
let copyNumber = a;
let lastDigit = 0;
while(copyNumber > 0) {
  lastDigit = copyNumber % 10;
  copyNumber = (copyNumber-lastDigit)/10;
  reverseNumber =  reverseNumber * 10 + lastDigit;
}
console.log("reverse of", a,"=>",reverseNumber);
 
