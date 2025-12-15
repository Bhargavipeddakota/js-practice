// partition by
//   identity: [1,1,1,2,2,1,1,3,3,2] => [[1,1,1],[2,2],[1,1],[3,3],[2]]
//   isEven: [1,3,1,2,2,1,1,3,5,2] => [[1,3,1],[2,2],[1,1,3,5],[2]]
function* partitionBy(fn, iterable) {
  let group = [];
  let prevValue = 0;

  for (const x of iterable) {
    const currentValue= fn(x);
    if (group.length && currentValue !== prevValue) {
      yield group;
      group = [];
    }
    group.push(x);
    prevValue = currentValue;
  }
  yield group;
}
console.log([...partitionBy((x) => x, [1, 1, 1, 2, 2, 1, 1, 3, 3, 3,2])]);
console.log([...partitionBy((x) => x & 1, [1, 1, 1, 2, 2, 1, 1,5, 3, 3, 3,2])]);
