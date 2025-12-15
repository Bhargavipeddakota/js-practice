function* primes() {
  const primes = [];
  let n = 2;

  while (true) {
    if (primes.every(p => n % p !== 0)) {
      primes.push(n);
      yield n;
    }
    n++;
  }
}
const p = primes();
console.log([...p.take(5)])
