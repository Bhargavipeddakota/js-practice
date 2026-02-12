
  
   jshdsjconst conn = await Deno.connect({
  hostname: "127.0.0.1",
  port: 8001,
  transport: "tcp",
});

const buf = new Uint8Array(1024);
conn.read(buf);
await  conn.write(buf);

