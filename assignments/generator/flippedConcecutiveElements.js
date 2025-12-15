function* flipConsecutive(iterable) {
  const it = iterable[Symbol.iterator]();
  while (true) {
    const a = it.next();
    const b = it.next();
    if (a.done || b.done) return;
    yield b.value;
    yield a.value;
  }
}
console.log([...flipConsecutive([1, 2, 3, 4])]);
