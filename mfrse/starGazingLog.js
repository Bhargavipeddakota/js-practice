let constellations = [];
const isIncludes = function(x,index,array){
  return array.indexOf(x) === index;
}
const array = [["Orion", "Leo"],["Taurus"],["Orion", "Gemini","Orion"],["Gemini"] ];
constellations = array.flat().filter(isIncludes);
console.log(constellations);