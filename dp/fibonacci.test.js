import { fibonacci } from "./fibonacci";

it("test fibonacci function", () => {
  expect(fibonacci(3)).toBe(2);
  expect(fibonacci(4)).toBe(3);
  expect(fibonacci(5)).toBe(5);
  expect(fibonacci(6)).toBe(8);
});
