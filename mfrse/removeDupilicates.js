const isIncludes = (x,index,array) => array.indexOf(x) === index;

const removeDupilicates = array => array.flat().filter(isIncludes);

const array = [["Orion", "Leo"],["Taurus"],["Orion", "Gemini","Orion"],["Gemini"] ];
console.log(removeDupilicates(array));

const birds = ["sparrow", "eagle","crow", "sparrow", "eagle", "crow"];
console.log(removeDupilicates(birds));