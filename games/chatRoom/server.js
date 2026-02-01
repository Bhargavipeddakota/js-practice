const listener = Deno.listen({
  "port": 8000,
  "transport": "tcp",
});

const clients = new Set();

const broadCastMsg = async (msg, sender) => {
  const encoder = new TextEncoder();
  for (const client of clients) {
    if (client !== sender) {
      await client.write(encoder.encode(msg));
    }
  }
};
const handleClint = async (conn) => {
  const buff = new Uint8Array(1024);
  const decoder = new TextDecoder();
  try {
    while (true) {
      const n = await conn.read(buff);
      const msg = decoder.decode(buff.slice(0, n));
      if (msg.trim() === "exit" || n === null) {
        break;
      }
      await broadCastMsg(msg, conn);
    }
  } finally {
    clients.delete(conn);
    conn.close();
  }
};

for await (const conn of listener) {
  console.log("server connected");
  clients.add(conn);
  handleClint(conn, clients);
}
