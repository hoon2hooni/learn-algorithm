import { makeRadixBucket, concatArr } from "./helper";
function radixSort(arr) {
  let answer;
  let order = 1;
  while (true) {
    let currentArr = answer || arr;
    let stdArr = [];
    stdArr = makeRadixBucket(currentArr, order);
    if (stdArr.length === 1) {
      break;
    }
    answer = concatArr(stdArr);
    order += 1;
  }
  return answer;
}

export { radixSort };
