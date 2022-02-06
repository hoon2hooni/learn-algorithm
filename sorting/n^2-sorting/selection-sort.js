import { swap } from "./swap";

function selectionSort(arr) {
  let minIdx;
  for (let i = 0; i < arr.length; i++) {
    minIdx = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    if (i !== minIdx) {
      swap(arr, i, minIdx);
    }
  }
  return arr;
}
export { selectionSort };
