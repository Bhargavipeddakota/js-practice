const temperature = [[22, 23], [25, 24, 33], [29]];
const isGreater = x => x < 32;
const isGreaterThan32 = temperature.flatMap(x => x).every(isGreater);
console.log(isDo);

[[3, 4], [5, 2], [1]]
  .flatMap(x => x)
  .every(x => x > 0);
