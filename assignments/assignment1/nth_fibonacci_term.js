const n = 0 ;
let firstTerm = 0;
let secondTerm = 1;
let thirdTerm = 1;
if(n === 1){
  console.log(firstTerm);
}
if(n !== 0 && n !== 1){
for(let count = 0; count <= n-3; count++ ){
  thirdTerm = firstTerm + secondTerm;
  firstTerm = secondTerm;
  secondTerm = thirdTerm;
}
console.log(thirdTerm);
}