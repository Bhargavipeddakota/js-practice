const p = 0;
const t = 1;
const r = 2;
let term = 1;
let newPrincipalAmount = p;
let simpleInterest = 0;
while (term <= t) {
  simpleInterest = (newPrincipalAmount * r) / 100;
  newPrincipalAmount= newPrincipalAmount + simpleInterest;
  term++;
}
const compoundInterest = newPrincipalAmount - p;
console.log(compoundInterest);
 