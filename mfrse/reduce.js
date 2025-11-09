const ribbonColors = ["red", "blue", "red", "green", "red", "blue"];
const numberOfBlue = (count,color) => color === "blue" ? count + 1 : count;
const colorCount = ribbonColors.reduce(numberOfBlue,0);
console.log(colorCount);
