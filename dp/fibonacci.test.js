import { fibonacci, fibonacciBottomUp } from "./fibonacci";

it("test fibonacci function", () => {
  expect(fibonacci(3)).toBe(2);
  expect(fibonacci(4)).toBe(3);
  expect(fibonacci(5)).toBe(5);
  expect(fibonacciBottomUp(1000)).toBe(4.346655768693743e208);
});
