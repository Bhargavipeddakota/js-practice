function* iterate(f, x) {
  let v = x;
  while (true) {
    v = f(v);
    yield v;
  }
}
const it = iterate(x => x << 1, 1);
console.log([...it.take(6)]);

