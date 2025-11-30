const a = 0;
const b = 24;
const smallerValue = a < b ? a : b;
let hcf = 1;
if (a === 0 && b === 0) {
  hcf = 0;
}
for (let factor = 1; factor <= smallerValue; factor++) {
  if (a % factor === 0 && b % factor === 0) {
    hcf = factor;
  }
}
console.log(hcf);
