import { swap } from "./swap";

function selectionSort(arr) {
  let minValue, minIdx;
  for (let i = 0; i < arr.length; i++) {
    minValue = Infinity;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < minValue) {
        minIdx = j;
        minValue = arr[j];
      }
    }
    if (i !== minIdx) {
      swap(arr, i, minIdx);
    }
  }

  return arr;
}
export { selectionSort };
