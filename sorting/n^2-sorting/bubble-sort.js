import { swap } from "./swap";

function bubbleSort(arr) {
  let hasSwapped = true;
  for (let i = arr.length; i > 0; i--) {
    if (!hasSwapped) {
      break;
    }
    hasSwapped = false;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        hasSwapped = true;
      }
    }
  }
  return arr;
}

export { bubbleSort };
