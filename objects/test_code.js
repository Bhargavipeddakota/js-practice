import { isEven } from "../is_even_or_odd.js";

const testDetails = {
  description :"dimensions[1,0]",
  task:isEven,
  input :2,
  expected: true
}

const  test = (t) => {
  
  const actual = t.task(input);
  const isPass = actual === t.expected;
  const icon = isPass ? "✅" : "❌";
  let message = `\t${icon} ${t.description}\n`;

  message += isPass ? "" : `\t   | Input    : ${t.input} |`;
  message += isPass ? "" : `\t   | Actual   : ${actual}`;
  message += isPass ? "" : `\n\t   | Expected : ${t.expected}\n`;

  console.log(message);
}
test(testDetails);