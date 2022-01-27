import { swap } from "./swap";
function insertionSort(arr) {
  let currentVal;
  for (let i = 1; i < arr.length; i++) {
    //idx는 계속올라감
    currentVal = arr[i];
    let j = i - 1;
    for (j; j >= 0 && arr[j] > currentVal; j--) {
      //[1, 3, 2]
      //j는 올라간 인덱스 -1 부터 계속 -1하면서 비교
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;

  //https://stackabuse.com/insertion-sort-in-javascript/
  // while ((j > -1) && (current < inputArr[j])) {
  //   inputArr[j+1] = inputArr[j];
  //   j--;
  // }
}

export { insertionSort };
