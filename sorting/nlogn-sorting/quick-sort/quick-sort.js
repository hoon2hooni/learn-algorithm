import { pivot } from "./pivot";

function quickSort(arr, left = 0, right = arr.length - 1) {
  //quickSort
  if (left >= right) {
    return;
  }
  const p = pivot(arr, left, right);
  quickSort(arr, p + 1, right);
  quickSort(arr, left, p - 1);
  return arr;
}
export { quickSort };
