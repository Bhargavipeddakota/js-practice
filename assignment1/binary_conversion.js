/*const number = 15;
let reminder = 0;
let quotient = number;
let binarynumber = 0;
let placeValue = 1;
while (quotient > 0) {
  reminder = quotient % 2;
  binarynumber = reminder * placeValue + binarynumber;
  quotient = (quotient - reminder) / 2;
  placeValue = placeValue * 10;
}
  console.log(binarynumber);
*/

const a = 363;
let reminder = 0;
let quotient = a;
while (quotient > 0) {
  reminder = quotient % 2;
  console.log(reminder);
  quotient = (quotient - reminder) / 2
}
