const cycler = (array, i = 0) => () => array[i++ % array.length];

const colorCycle = cycler(["red", "blue", "green"]);

[0,0,0,0].filter(colorCycle) || colorCycle();

const a = b => c => d => b(c(d));
const inc = x => x+1;
const sqr = x =>  x * x;
[1,2,3].map(a(inc)(sqr));
