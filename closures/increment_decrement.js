const someThing = (num = 0) => [() => num++,() => num--]

const [a,b] = someThing();

[a,b,a,b,a].map(x => x());