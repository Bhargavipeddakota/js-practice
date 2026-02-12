// handle_request.js
const paths = {
  "/": "./sample.html",
  "/sample": "./sample.html",
  "/birds": "./birds.html",
  "/animal": "./animal.html",
  "/fruits": "./fruits.json",
  "/movies": "./movies.json",
};
// export const handleRequest = (request) => {
//   console.log(request);
//   return new Response("hello world");
// };

export const createHandleRequest = (readFile = Deno.readTextFileSync) => {
  console.log(request);
  return (request) => handleRequest(request, readFile);
};

 export const getContentType = (path) => {
  const extension = path.split(".").at(-1);
  return extension === "json" ? "application/json" : "text/html";
};

const composeResponse = (body, contentType, status = 200) => {
  return new Response(body, {
    headers: { "content-type": contentType },
    status,
  });
};

export const handleRequest = (request, readFile) => {
  try {
    const path = new URL(request.url).pathname;

    const filePath = paths[path];
    const content = readFile(filePath);
    const contentType = getContentType(filePath);
    return composeResponse(content, contentType);
  } catch {
    const body = readFile("./pages/notFound.html");
    return composeResponse(body, "text/html", 404);
  }
};
