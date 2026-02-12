const listener = Deno.listen({
  port: 8001,
  transport: "tcp",
});

const decoder = new TextDecoder();

const handleConn = async (conn, buf) => {
  while (true) {
    const n = await conn.read(buf);
    const msg = decoder.decode(buf.slice(0,n));
    if(msg.trim() === "exit"){
      break;
    }
    console.log(msg);
  }
};

for await (const conn of listener) {
  const buf = new Uint8Array(1024);
    await handleConn(conn, buf);
    conn.close();
}
