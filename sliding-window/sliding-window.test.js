import { slidingWindow } from "./sliding-window";
it("test", () => {
  const testArr = [7, 10, 8, 2, 4, 4];
  const windowSize = 3;
  expect(slidingWindow(testArr, windowSize)).toBe(25);
});
