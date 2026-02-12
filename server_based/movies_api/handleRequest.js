const paths = {
  "/": "./movies.json",
  "/movies": "./movies.json",
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

const handleGetRequest = (request) => {
  try {
    const path = new URL(request.url).pathname;
    const filePath = paths[path];
    const content = Deno.readTextFileSync(filePath);
    const contentType = getContentType(filePath);

    return composeResponse(content, contentType);
  } catch {
    return composeResponse("Not Found", "text/html", 404);
  }
};

const getUpdatedData = async (request, oldObj) => {
  const data = await request.json();
  let newObj = { ...oldObj };

  for (const [key, rawValue] of Object.entries(data)) {
    const incoming = typeof rawValue === "string" ? [rawValue] : rawValue;

    newObj[key] = [...new Set([...(newObj[key] || []), ...incoming])];
  }

  return newObj;
};



const handlePostRequest = async (request) => {
  try {
    const path = new URL(request.url).pathname;
    const filePath = paths[path];
    const oldData = Deno.readTextFileSync(filePath);
    const oldObj = JSON.parse(oldData);

    const updatedData = await getUpdatedData(request, oldObj);

    Deno.writeTextFileSync(
      "movies.json",
      JSON.stringify(updatedData, null, 2),
    );

    return composeResponse(
      JSON.stringify(updatedData),
      "application/json",
      201,
    );
  } catch (err) {
  console.error(err);
  return composeResponse(err.message, "text/plain", 404);
}
};

export const handleRequest = async (request) => {
  if (request.method === "GET") {
    return handleGetRequest(request);
  }

  if (request.method === "POST") {
    return handlePostRequest(request);
  }

  return composeResponse("Method Not Allowed", "text/plain", 405);
};
