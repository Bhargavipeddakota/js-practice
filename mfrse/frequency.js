// Build a frequency summary of words used in a poem draft.
// Big black bugs bleed blue black blood, but baby black bugs bleed blue blood.
//[big,1],[black,3],[bugs,2],[bleed,2],
const string =
  "Big black bugs bleed blue black blood but baby black bugs bleed blue blood";
const words = string.split(" ");

const occurence = (frequency, target) => {
  if (!(target in frequency)) {
    frequency[target] = 0;
  } 
  frequency[target] += 1;
  return frequency;
}

console.log(words.reduce(occurence, {}));
