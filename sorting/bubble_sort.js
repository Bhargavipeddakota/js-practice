const str = function (a, b) {
  return a.length < b.length;
}

const number = function (a, b) {
  return a < b;
}

function swaping(sortedArray, i, j) {
  let temp = sortedArray[i];
  sortedArray[i] = sortedArray[j];
  sortedArray[j] = temp;
}

function sorting(data, dataType) {
  let sortedArray = data.slice();
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (dataType(sortedArray[i], sortedArray[j])) {
        swaping(sortedArray, i, j);
      }
    }
  }
  return sortedArray;
}

const result = sorting(["a", "ab"], str)
const result1 = sorting([7, 2, 5, 1], number)
console.log(result);

