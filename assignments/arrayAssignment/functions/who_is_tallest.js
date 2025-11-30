function greatestOfTwo(x, y) {
  return (x > y) ? x : y;
}
function greaterOfThree(x, y, z) {
  let g = greatestOfTwo(x, y);
  return (g > z) ? g : z;
}
/*const  person1Height = 6;
const  person2Height = 7;
const  person3Height = 5;*/
console.log("who is tallest ?");
console.log(greaterOfThree(6,7,5));
