const sum = (element, result) => element + result;
const totalCount = array => array.flatMap(x => x).reduce(sum);

function main() {
  console.log(totalCount([[5, 3], [2], [4, 1]]));
  console.log(totalCount([[2, 3, 2], [4], [1, 1]]));
  console.log(totalCount([[4, 6],[2, 3, 1],[5]]));
  console.log(totalCount([[1, 2, 1],[3],[2]]));
  console.log(totalCount([[3, 2],[1],[4]]));
  console.log("pens",totalCount([[2, 3],[1],[3, 2]]));
  console.log("exercise",totalCount([[10, 20],[5],[15, 10]]));
  console.log("pages",totalCount([[12, 10],[5],[8, 7]]));
}
main();