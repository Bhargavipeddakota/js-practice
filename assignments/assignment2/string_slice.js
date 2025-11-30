function slice(text, start, end) {
  let  subString = "";
  let startRange = start;
  let endRange = end;
  if(start < 0)
  {
    startRange = 0;
  }
  if(end >= text.length){
    endRange = text.length-1;
  }
  for(let index = startRange; index <= endRange; index++){
    subString = subString + text[index];
  }
  return subString;
}
function generateEmoji(expectedValue, actualvalue) {
  let isEqual = (actualvalue === expectedValue) ? "✅ " : "❌ ";
  return isEqual;
}
function testSlice(text, start,end, expectedOutput) {
  let actualOutput = slice(text,start,end);
  let emoji = generateEmoji(actualOutput, expectedOutput);
  let preffix = "expectedOutput -> " + expectedOutput;
  console.log(emoji + preffix, "actualOutput ->", actualOutput);
}
testSlice("hello",0,3,"hell");
testSlice("hello ",-1,3,"hell");
testSlice("hello world",6,10,"world");
testSlice('h', 0, 2,"h");
testSlice('', 0, 2,"");
testSlice('hello', 0, 0,"h");
testSlice('hello', 0, 5,"hello");
