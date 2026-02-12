const listener = Deno.listen({
  port: 8000,
  transport: "tcp",
});

console.log("Chat server running on port 8000");

const chatMembers = new Map();
const decoder = new TextDecoder();
const encoder = new TextEncoder();

const broadcastMsg = async (msg, senderConn) => {
  for (const conn of chatMembers.values()) {
    if (conn !== senderConn) {
        await conn.write(encoder.encode(msg));
    }
  }
};

const getUserName = async (conn) => {
  const buffer = new Uint8Array(1024);

  await conn.write(encoder.encode("Welcome to the chat room!\n"));
  await conn.write(encoder.encode("Enter your name: "));

  const n = await conn.read(buffer);
  if (n === null) return null;

  return decoder.decode(buffer.slice(0, n)).trim();
};

const handleClient = async (conn) => {
  const buffer = new Uint8Array(1024);

  const userName = await getUserName(conn);
  if (!userName) {
    conn.close();
    return;
  }

  chatMembers.set(userName, conn);
  await broadcastMsg(`${userName} joined the chat\n`, conn);

  try {
    while (true) {
      const n = await conn.read(buffer);
      if (n === null) break;

      const msg = decoder.decode(buffer.slice(0, n)).trim();
      if (msg === "quit") break;

      await broadcastMsg(`${userName}: ${msg}\n`, conn);
    }
  } finally {
    chatMembers.delete(userName);
    await broadcastMsg(`${userName} left the chat\n`, conn);
    conn.close();
  }
};

for await (const conn of listener) {
  console.log("New client connected");
  handleClient(conn);
}
