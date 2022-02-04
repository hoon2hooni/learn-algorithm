import { getDigit, makeRadixBucket } from "./helper";
import { radixSort } from "./radix-sort";
describe("test radix sort", () => {
  test("test helper method", () => {
    expect(getDigit(123, 1)).toBe(3);
    expect(getDigit(123, 2)).toBe(2);
    expect(getDigit(123, 3)).toBe(1);
  });

  test("test radix sort", () => {
    expect(radixSort([1, 200, 30, 40, 90, 1000, 1200])).toEqual([
      1, 30, 40, 90, 200, 1000, 1200,
    ]);
  });
});
