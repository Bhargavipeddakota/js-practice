const numberOfBlue = (count, color) => color === "blue" ? count + 1 : count;

const numberOfDuens = (count, element) => element === "Dune" ? count + 1 : count;
const numberOfDeers = (count, element) => element === "deer" ? count + 1 : count;
const numberOfChocolate = (count, element) => element === "chocolate" ? count + 1 : count;

const books = ["Dune", "Dune", "Foundation", "Dune"];
const ribbonColors = ["red", "blue", "red", "green", "red", "blue"];
const animal = ["deer", "deer", "rabbit", "deer"];
const iceCream = [["vanilla", "chocolate"],["strawberry"],["chocolate"]];
console.log(books.reduce(numberOfDuens, 0));
console.log(ribbonColors.reduce(numberOfBlue, 0));
console.log(animal.reduce(numberOfDeers, 0));
console.log(animal.reduce(numberOfDeers, 0));
console.log(iceCream.reduce(numberOfChocolate, 0));
