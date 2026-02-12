//read request
// parse the request
// handle request - takes the request generate response
// write response

const decoder = new TextDecoder();
const encoder = new TextEncoder();

const createResponseLine = ({ code, msg }, { protocol }) =>
  `${protocol} ${code} ${msg}`;

const formatHeader = (headers) =>
  Object.entries(headers)
    .map(([name, value]) => `${name}: ${value}`)
    .join("\r\n");

const formatResponse = (response, request) =>
  [
    createResponseLine(response, request),
    formatHeader(response.headers),
    "",
    response.body,
  ].join("\r\n");

const readRequest = async (conn) => {
  const buffer = new Uint8Array(1024);
  const size = await conn.read(buffer);

  return decoder.decode(buffer.slice(0, size));
};

const parseRequest = (request) => {
  const [requestLine] = request.split("\r\n");
  const [method, path, protocol] = requestLine.split(" ");

  return { method, path, protocol };
};

const sendResponse = async (conn, response, request) => {
  const formatedResponse = formatResponse(response, request);
  await conn.write(encoder.encode(formatedResponse));
};

const handleConn = async (conn, handleRequest) => {
  const request = await readRequest(conn);
  const parsedRequest = parseRequest(request);
  const response = handleRequest(parsedRequest);

  await sendResponse(conn, response, parsedRequest);
  await conn.close();
};

export const server = async (port, handleRequest) => {
  const listener = await Deno.listen({ port });
  console.log(`Server running on http://localhost:${port}`);

  for await (const conn of listener) {
    handleConn(conn, handleRequest);
  }
};
