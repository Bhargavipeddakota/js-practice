const isIncludes = (x,index,array) => array.indexOf(x) === index;

const removeDupilicates = function(array) {
let result = [];
result = array.flat().filter(isIncludes)
return result;
}

const array = [["Orion", "Leo"],["Taurus"],["Orion", "Gemini","Orion"],["Gemini"] ];
console.log(removeDupilicates(array));

const birds = ["sparrow", "eagle","crow", "sparrow", "eagle", "crow"];
console.log(removeDupilicates(birds));