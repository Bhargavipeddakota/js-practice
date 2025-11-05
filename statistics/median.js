function sorting(data) {
  let sortedArray = data.slice();
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (sortedArray[i] < sortedArray[j]) {
        let temp = sortedArray[i];
        sortedArray[i] = sortedArray[j];
        sortedArray[j] = temp;
      }
    }
  }
  return sortedArray;
}

function median(data) {
  let sortedData = sorting(data);
  let mid = (sortedData.length - 1) / 2;
  let lowerValue = sortedData[Math.floor(mid)];
  let upperValue = sortedData[Math.ceil(mid)];
  return (lowerValue + upperValue) / 2;
}
console.log(median([1, 2, 3,4]));
