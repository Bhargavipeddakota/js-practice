function decodeInteger(bencode, index) {
  let element = bencode.slice(index,bencode.length);
  const end = element.indexOf("e")
  const number = element.slice(1, end)
  return [parseInt(number), end + index + 1];
}

function decodeString(bencode, index) {
  const element = bencode.slice(index,bencode.length);
  const colonIndex = element.indexOf(":");
  const stringLength = parseInt(element.slice(0, colonIndex));
  const start = colonIndex + 1;
  const end = start + stringLength;
  return [bencode.slice(start, end), end+1];
}

function decodeArray(bencode, index) {
  let decodedArray = [];
  index++;
  while (index < bencode.length - 1) {
    // const endRange = bencode.indexOf("e") + 1;
    let result = decodeNext(bencode, index);
    decodedArray.push(result[0]);
    console.log(decodedArray);
    console.log("result"+result);
    
    index = result[1];
  }
  return [decodedArray ,index + 1];
}

function decodeNext(bencode, index) {
  const char = bencode[index];
  if (char === "i") {
    return decodeInteger(bencode, index);
  }
  if (char === "l") {
    return decodeArray(bencode, index);
  }
  if (!isNaN(char)) {
    return decodeString(bencode,index);
  }
}

function decode(bencode) {
  const result = decodeNext(bencode, 0);
  return result[0];
}

function test(data, expected, description) {
  const actual = decode(data);
  const isPass = actual === expected;
  const icon = isPass ? "✅" : "❌";
  let message = `\t${icon} ${description}\n`;

  message += isPass ? "" : `\t   | Input    : ${data} |`;
  message += isPass ? "" : `\t   | Actual   : ${actual}`;
  message += isPass ? "" : `\n\t   | Expected : ${expected}\n`;

  console.log(message);
}

function testAllDecode() {
  // test("i0e", 0, "zero");
  // test("i27e", 27, "positive number");
  // test("i-12e", -12, "negative number");
  test("5:hello", "hello", "string");
  // test("0:", "", "empty string");
  test("l2:abe", ["ab",[3,["a"]]], "deep list");
  test("li0ei12ee", [0,12], "dlist");
}

testAllDecode();
// bencode.slice(index,bencode.length)
