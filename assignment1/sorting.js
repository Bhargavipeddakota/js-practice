let numberOfTimes = 0;
function sorting(data) {
  let sortedArray = data.slice();
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      numberOfTimes++;
      if (sortedArray[i] < sortedArray[j]) {
        let temp = sortedArray[i];
        sortedArray[i] = sortedArray[j];
        sortedArray[j] = temp;
      }
    }
  }
  return sortedArray;
}

function randomNumber(lower, upper) {
  return lower + Math.floor(Math.random() * upper - lower)
}

function randomData(noOfElements) {
  let data = [];
  for (let index = 0; index < noOfElements; index++) {
    data.push(randomNumber(0, 100))
  }
  return data;
}

function benchMark(noOfElements) {
  const data = randomData(noOfElements);
  sorting(data);
  console.log(`${noOfElements}-->${numberOfTimes}`)
}

benchMark(100);
