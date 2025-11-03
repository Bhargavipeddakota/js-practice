function isNumber(data) {
  return typeof data === "number";
}

function isString(data) {
  return typeof data === "string";
}

function encode(data) {
  if (isNumber(data)) {
    return `i${data}e`;
  }
  if (isString(data)) {
    return `${data.length}:${data}`;
  }
}

function testEncode(data, expected, description) {
  const actual = encode(data);
  const isPass = actual === expected;
  const icon = isPass ? "✅" : "❌";
  let message = `\t${icon} ${description}\n`;

  message += isPass ? "" : `\t   | Input    : ${data} |`;
  message += isPass ? "" : `\t   | Actual   : ${actual}`;
  message += isPass ? "" : `\n\t   | Expected : ${expected}\n`;

  console.log(message);
}

function testAllTestCases() {
  testEncode(0, "i0e", "zero");
  testEncode(1, "i1e", "Positive Integer");
  testEncode(-1, "i-1e", "Negative Integer");
  testEncode("a", "1:a", "simple string");
  testEncode("", "0:", "empty string");
}

testAllTestCases();
