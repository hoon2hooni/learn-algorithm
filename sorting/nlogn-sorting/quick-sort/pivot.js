function pivot(arr, start = 0, end = arr.length - 1) {
  let pivotIndex = start + 1;
  let stdValue = arr[start];
  for (let j = pivotIndex; j <= end; j++) {
    if (stdValue > arr[j]) {
      [arr[pivotIndex], arr[j]] = [arr[j], arr[pivotIndex]];
      pivotIndex += 1;
    }
  }
  pivotIndex -= 1;
  [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];
  return pivotIndex;
}

export { pivot };
