const reducer = function(array,currentElement){
  if(!array.includes(currentElement)){
    array.push(currentElement);
  }
  return array;
}
const array = [["Orion", "Leo"],["Taurus"],["Orion", "Gemini","Orion"],["Gemini"] ];
const removeDuplicates = array => array.flat().reduce(reducer,[]);

console.log(removeDuplicates(array));

const birds = ["sparrow", "eagle","crow", "sparrow", "eagle", "crow"];
console.log(removeDuplicates(birds));

const studentNames = [["Asha", "Ravi", "Neel"],["Ravi"],["Asha", "Meera"]];
console.log(removeDuplicates(studentNames));