const readder = Deno.stdin.readable;
const writer = Deno.stdout.writable
await readder.pipeTo(writer);
console.log("reading completed")