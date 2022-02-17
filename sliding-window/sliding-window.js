const slidingWindow = (arr, n) => {
  let windowSum = 0;
  let windowStart = 0;
  let maxSum = 0;
  arr.forEach((_, windowEnd) => {
    windowSum += arr[windowEnd];
    if (windowEnd >= n - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  });
  return maxSum;
};

export { slidingWindow };
