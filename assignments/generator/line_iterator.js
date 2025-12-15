//  Iterate over lines of text
//   "this\nis\ngood" => ['this','is','good']
const lineIterator = function* (input) {
  let index = 0;

  while (index < input.length) {
    let endLine = input.indexOf("\n", index+1);
    if (endLine === -1) {
      endLine = input.length;
    }
    yield input.slice(index, endLine);
    index = endLine+1;
  }
};
console.log([...lineIterator( "this\nis\ngood")]);
