import { handleRequest } from "./handleRequest.js";

const main = () => {
 Deno.serve(handleRequest);
}

main();