const swap = (arr, i, j) => {
  [arr[j], arr[i]] = [arr[i], arr[j]];
};

export { swap };
