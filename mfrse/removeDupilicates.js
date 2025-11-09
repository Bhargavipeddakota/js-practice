const isIncludes = (x,index,array) => array.indexOf(x) === index;

const starGazing = function(array) {
let constellations = [];
constellations = array.flat().filter(isIncludes)
return constellations;
}
const array = [["Orion", "Leo"],["Taurus"],["Orion", "Gemini","Orion"],["Gemini"] ];
console.log(starGazing(array));

const birdWatching = function(array) {
  let birdSpecies = [];
  birdSpecies = birds.flat().filter(isIncludes);
  return birdSpecies;
}
const birds = ["sparrow", "eagle","crow", "sparrow", "eagle", "crow"];
console.log("birds =",birdWatching(birds));