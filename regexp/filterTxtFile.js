const input = Deno.readTextFileSync("./file");
const output = input.match(/.*.txt/g)
console.log(output);
"see queue tool sky aedfg".match(/\w*[aeiou]{2,}\w*/g);