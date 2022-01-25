function bubbleSort(arr) {
  let flag = true;
  for (let i = arr.length; i > 0; i--) {
    if (!flag) {
      break;
    }
    flag = false;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        flag = true;
      }
    }
  }
  return arr;
}

const swap = (arr, i, j) => {
  [arr[j], arr[i]] = [arr[i], arr[j]];
};

export { bubbleSort };
