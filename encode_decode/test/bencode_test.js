import { assertEquals } from "@std/assert";
import { decode } from "../src/decode.js";

Deno.test("simple list", () => {
  assertEquals(decode("l2:abe"),["ab"]);
});
Deno.test("simple string", () => {
  assertEquals(decode("2:ae"),"ae");
});
Deno.test("integer", () => {
  assertEquals(decode("i0e"),0);
});
Deno.test("Negative integer", () => {
  assertEquals(decode("i-10e"),-10);
});
Deno.test("deepList", () => {
  assertEquals(decode("li0eli12ee"),[0,[12]]);
});
