import {assertEquals} from "@std/assert"
import { patterns } from "./patterns.js";

const dbg = (x) => {
  console.log(x);
  return x;
};

const generatePattern = (style,input) => {
  return patterns[style](...input);
};

Deno.test("description", () => {
    assertEquals(generatePattern("filled-rectangle",[2,2]),"**/n**");
 });

 Deno.test("triangle", () => {
    assertEquals(generatePattern("right-aligned-triangle",[3]),"  */n **/n***");
 });
  Deno.test("alternating-rectangle", () => {
    assertEquals(generatePattern("alternating-rectangle",[3,3,"*-"]),"***/n---/n***");
 });
  Deno.test("spaced-alternating-rectangle", () => {
    assertEquals(generatePattern("spaced-aternating-rectangle",[3,3,"*-@"]),"***/n---/n@@@");
 });


// export const testFunctions = (style, t) => {
//   const { description, dimension, expected } = t;
//   const actual = generatePattern(style, dimension);
//   Deno.test(description, () => {
//     assertEquals(actual,expected);
//   });
// };
