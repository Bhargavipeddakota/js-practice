const reducer = (array,currentElement) => {
  if(!array.includes(currentElement)){
    array.push(currentElement);
  }
  return array;
}
const mirror = (x) => x;
const removeDuplicates = array => array.flatMap(mirror).reduce(reducer,[]);

function main(){
console.log(removeDuplicates([["Orion", "Leo"],["Taurus"],["Orion", "Gemini"]]));
console.log(removeDuplicates(["sparrow", "eagle","crow", "sparrow", "eagle", "crow"]));
console.log(removeDuplicates([["Asha", "Ravi", "Neel"],["Ravi"],["Asha", "Meera"]]));
}

main();
