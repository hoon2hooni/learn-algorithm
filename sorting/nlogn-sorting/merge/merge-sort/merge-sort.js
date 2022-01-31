import { merge } from "./merge";

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  let half = parseInt(arr.length / 2);
  let left = mergeSort(arr.slice(0, half));
  let right = mergeSort(arr.slice(half, arr.length));
  return merge(left, right);
}

export { mergeSort };
