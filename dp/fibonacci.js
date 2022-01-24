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
function fibonacciBottomUp(n) {
  if (n <= 2) return 1;
  const fibNumbers = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNumbers[i] = fibNumbers[i - 2] + fibNumbers[i - 1];
  }
  return fibNumbers[n];
}
export { fibonacci, fibonacciBottomUp };
