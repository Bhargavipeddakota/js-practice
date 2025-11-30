const n = 7;
let firstTerm = 0;
let secondTerm = 1;
let thirdTerm = 1;
if(n !== 0){
  console.log(firstTerm);
}
for(let count = 0; count <= n-2; count++ ){
  console.log(thirdTerm);
  thirdTerm = firstTerm + secondTerm;
  firstTerm = secondTerm;
  secondTerm = thirdTerm;
}