function* permutationPairs() {
  let i = 1;
  while (i < 5) {
    let j = 1;
    while (j < 5) {
      yield [i, j];
      j++;
    }
    i++;
  }
}
console.log([...permutationPairs().filter((x) => x[0]!== x[1])]);

