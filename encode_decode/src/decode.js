
function decodeInteger(bencode, index) {
  const end = bencode.indexOf("e", index);
  const number = bencode.slice(index+1, end);
  return [parseInt(number), end + index];
}

function decodeString(bencode, index) {
  const colonIndex = bencode.indexOf(":", index);
  const stringLength = parseInt(bencode.slice(index, colonIndex));
  const start = colonIndex + 1;
  const end = start + stringLength;
  return [bencode.slice(start, end), end];
}

function decodeArray(bencode, index) {
  const decodedArray = [];
  index++;
  while (index < bencode.length - 1) {
    const [value, nextIndex] = decodeNext(bencode, index);
    decodedArray.push(value);
    index = nextIndex;
  }
  return [decodedArray, index + 1];
}

function decodeNext(bencode, index) {
  const char = bencode[index];
    console.log({bencode,index,char});
  if (char === "i") {
    return decodeInteger(bencode, index);
  }
  if (char === "l") {
    return decodeArray(bencode, index);
  }
  if (!isNaN(char)) {
    return decodeString(bencode, index);
  }
}

export function decode(bencode) {
  const result = decodeNext(bencode, 0);
  return result[0];
}


