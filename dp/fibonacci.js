function fibonacci(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  const answer = fibonacci(n - 2) + fibonacci(n - 1);
  return answer;
}

export { fibonacci };
