function* chunk(size, step, array) {
  let i = 0;
  while (i < array.length-1) {
    yield array.slice(i, i+=size);
    if(i<array.length) {
      i -= step;
    }
  }
}
console.log([...chunk(3, 1, [1, 2, 3, 4, 5])]);
console.log([...chunk(3, 2, [1, 2, 3, 4, 5])]);
