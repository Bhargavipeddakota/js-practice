const ribbonColors = ["red", "blue", "red", "green", "red", "blue"];
const numberOfBlue = function (count,color) {
  return color === "blue" ? count + 1 : count;
}
const colorCount = ribbonColors.reduce(numberOfBlue,0);
console.log(colorCount);
