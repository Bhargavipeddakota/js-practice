const a = 8;
let number = a;
for (let divisor = 2; divisor <= a; divisor++) {
  while (number % divisor === 0) {
    console.log(divisor);
    number = number / divisor;
  }
}