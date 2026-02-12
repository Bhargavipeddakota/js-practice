import { createHandleRequest } from "./.vscode/implementServer/main.js";

const main = () => {
 Deno.serve(createHandleRequest());
}

main();