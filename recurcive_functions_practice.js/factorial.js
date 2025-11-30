function fctorial(n){
  console.log(n);
  if(n === 0){
    return 1;
  }
  console.log(n);
  return n * fctorial(n - 1);
}
console.log(fctorial(5));