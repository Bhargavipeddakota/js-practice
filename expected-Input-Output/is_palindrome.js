const number = 131;
let reverseNumber = 0;
let copyNumber = number;
let lastdigit =0;
while(copyNumber > 0) {
  lastdigit = copyNumber % 10;
  copyNumber = (copyNumber-lastdigit)/10;
  reverseNumber =  reverseNumber * 10 + lastdigit;
}
console.log(number," reverse =", reverseNumber);
let isPalindrome = (reverseNumber ===  number)? " is palindrome number" : " is not a palindrome";
console.log(number, isPalindrome);
