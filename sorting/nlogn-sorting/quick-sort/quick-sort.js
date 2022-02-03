import { pivot } from "./pivot";

function quickSort(arr, start = 0, end = arr.length - 1) {
  //quickSort
  const p = pivot(arr, start, end);
  if (p + 1 < end) {
    quickSort(arr, p + 1, end);
  }
  if (p - 1 > start) {
    quickSort(arr, start, p - 1);
  }
  return arr;
}
export { quickSort };
