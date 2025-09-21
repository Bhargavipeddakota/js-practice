const animalSequence = "zllzzzl";
let distance = 0;
let minimumDistance = -1;
const lion = "l";
const zebra = "z"
let previousAnimal = " ";
let index;
for (index = 0; index < animalSequence.length; index++) {
  let currentValue = animalSequence[index];
  if (currentValue === lion || currentValue === zebra) {
    if (currentValue !== previousAnimal && previousAnimal !== " ") {
      minimumDistance = (distance < minimumDistance || minimumDistance === -1) ? distance : minimumDistance;
    } 
    previousAnimal = currentValue;
    distance = 0;
  }
  while (animalSequence[index + 1] === " " && index + 1<animalSequence.length ) {
    distance++;
    index++;
  }
}
console.log("minimumDistance", minimumDistance);
