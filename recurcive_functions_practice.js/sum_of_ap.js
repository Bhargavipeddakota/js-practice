function sumOfAp(n){
  if(n === 0){
    return 0;
  }
  return n + sumOfAp(n - 1);
}
console.log(sumOfAp(4));