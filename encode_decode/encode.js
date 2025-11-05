function encodeArray(data) {
  let result = "l";
  for (let index = 0; index < data.length; index++) {
    result += encode(data[index]);
  }
  return result + "e";
}

function encode(data) {
  switch (typeof data) {
    case "number":
      return `i${data}e`;
    case "string":
      return `${data.length}:${data}`;
    case "object":
      const result = encodeArray(data);
      return result;
    default:
      break;
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

function testAllEncode() {
  testEncode(0, "i0e", "zero");
  testEncode(1, "i1e", "Positive Integer");
  testEncode(-1, "i-1e", "Negative Integer");
  testEncode("a", "1:a", "simple string");
  testEncode("", "0:", "empty string");
  testEncode(["a"], "l1:ae", "single element array");
  testEncode(["a", 1], "l1:ai1ee", "single element array");
  testEncode(["a", [1]], "l1:ali1eee", "2 dimensional array");
}

testAllEncode();
