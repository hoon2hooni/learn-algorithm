function fibonacci(n, memo = new Map()) {
  if (n <= 2) {
    return 1;
  }
  if (memo.get(n)) {
    return memo.get(n);
  }
  const answer = fibonacci(n - 2, memo) + fibonacci(n - 1, memo);
  memo.set(n, answer);
  return answer;
}

export { fibonacci };
