const a = 0;
const b = 18;
/*let productOfA = 1;
let productOfB = 1;
let lcm = 0;
for (let count1 = 1; count1 <= b; count1++) {
  for (let count2 = 1; count2 <= a; count2++) {
    //productOfA = a * count1;
      productOfB = b * count2;
    if (productOfA === productOfB) {
      lcm = productOfA;
      count1 = b + 1;
      break;
    }
  }
}
console.log(lcm);*/

let multiple = (a > b) ? a : b;
let isCommonMultiple = false;

while (!isCommonMultiple) {
  const isDivisibleByBoth = multiple % a === 0 && multiple % b === 0;
  if (isDivisibleByBoth) {
    isCommonMultiple = true;  
  } else {
    multiple++;
  }
}

console.log(multiple);
