function* consicutivePairs(numbers) {
  let i = 0;
  while (true) {
    yield [numbers[i], numbers[++i]];
  }
}
console.log([...consicutivePairs([1, 2, 3, 4, 5]).take(4)]);
