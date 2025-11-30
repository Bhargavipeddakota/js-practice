const a = 2;
const d = 3;
const n = 5;
let sum = 0;
let numberInAp = a;
for( let count = 0 ; count < n; count++){
  sum = sum + numberInAp;
  numberInAp = numberInAp + d;
}
console.log(sum);