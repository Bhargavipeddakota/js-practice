const chori = [["mi", "fa", "so"],["do", "mi"],["fa"]];
const isinclude = (x) => x === "do";
const isDo = chori.flatMap(x => x).some(isinclude);
console.log(isDo);

const array = [["la", "la"],["mi"],["so", "la"]];
const isinclude1 = x => x === "so";
const isSo = array.flatMap(x => x).some(isinclude1);
console.log(isSo);

const steps = [["step", "tap"],["turn", "step"]];
console.log(steps.flatMap(x => x).some(x => x === "turn"));