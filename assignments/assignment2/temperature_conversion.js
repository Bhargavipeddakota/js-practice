function tocelsius(from, value) {
  if (from === 'k') {
    return value - 273.15;
  }
  if (from === 'f') {
    return (value - 32) * 5 / 9;
  }
}
function toKeleven(from, value) {
  if (from === 'f') {
    const celsius = tocelsius(from, value);
    return celsius + 273.15;
  }
  if (from === "c") {
    return value + 273.15;
  }
}
function toFahrenheit(from, value) {
  if (from === 'k') {
    const celsius = tocelsius(from, value);
    return (celsius * 9 / 5) + 32;
  }
  if (from === 'c') {
    return (value * 9 / 5) + 32;
  }
}
function convert(from, to, value) {
  if (from === to) {
    return "NaN";
  }
  if (to === 'c') {
    return tocelsius(from, value);
  }
  if (to === 'k') {
    return toKeleven(from, value);
  }
  if (to === 'f') {
    return toFahrenheit(from, value);
  }
}
function approximateValue(actualValue, expectedValue) {
  const startRange = expectedValue - 0.5;
  const endRange = expectedValue + 0.5;
  return actualValue >= startRange && actualValue <= endRange
    || actualValue === "NaN";
}
function generateEmoji(expectedValue, actualvalue) {
  const isEqual = (approximateValue(actualvalue, expectedValue)) ? "✅ " : "❌ ";
  return isEqual;
}
function testconvert(from, to, value, expectedOutput) {
  const actualOutput = convert(from, to, value);
  const emoji = generateEmoji(actualOutput, expectedOutput);
  const preffix = "expectedOutput -> " + expectedOutput;
  console.log(emoji + preffix, "actualOutput ->", actualOutput);
}
testconvert('c', 'f', 37, 98.6);
testconvert('f', 'c', -40, -40);
testconvert('c', 'k', 0, 273.15);
testconvert('k', 'c', 100, -173.15);
testconvert('f', 'k', 98.6, 310.15);
testconvert('k', 'f', 100, -279.67);
testconvert('c', 'c', 100, "NaN");
testconvert('c', 'k', "hello", "NaN");
