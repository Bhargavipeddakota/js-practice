const uniqueElements = (array,currentElement) => {
  if(!array.includes(currentElement)){
    array.push(currentElement);
  }
  return array;
}

const ribbons =[["blue", "yellow"],["yellow", "green"],["blue"]];
const numberOfBlueRibbons =  array => array.flatMap(x => x).reduce(uniqueElements,[]);
console.log(numberOfBlueRibbons);

const starGazing = [["Orion", "Leo"],["Taurus"],["Orion", "Gemini"]];
const listConstellations = array => array.flatMap(x => x).reduce(uniqueElements,[]);
const removeDuplicates = array => array.flatMap(x => x).reduce(uniqueElements,[]);

function main(){
console.log(removeDuplicates());
console.log(removeDuplicates(["sparrow", "eagle","crow", "sparrow", "eagle", "crow"]));
console.log(removeDuplicates([["Asha", "Ravi", "Neel"],["Ravi"],["Asha", "Meera"]]));

console.log(removeDuplicates([["rice", "lentils"],["rice"],["curd", "lentils"]]));
console.log(removeDuplicates([["small", "large", "medium", "small"]]));
console.log(removeDuplicates([[1, 2],[3],[2, 4, 1]]));
console.log(removeDuplicates([["apple", "banana"],["apple"],["apple", "orange"]]));
console.log("movies",removeDuplicates([["Inception", "Dunkirk"],["Interstellar"],["Inception"]]));
console.log("students",removeDuplicates(["A", "B", "A", "C", "B"]));
console.log("flowers",removeDuplicates([["rose", "lily"],["lily", "tulip"]]));
console.log("station names",removeDuplicates([["A", "B"],["B", "C"],["A"]]));
}

main();
[["idli", "vada"],["vada", "upma"]].flatMap(x => x).reduce(uniqueElements)
