function* cycleOfNumbers(input) {
  let i = 0;
  while (true) {
    yield input[i++ % input.length];
  }
}
console.log([...cycleOfNumbers
([1, 2, 3, 4, 5]).take(12)]);
