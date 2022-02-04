import { getDigit } from "./helper";
describe("test radix sort", () => {
  test("test helper method", () => {
    expect(getDigit(123, 1)).toBe(3);
    expect(getDigit(123, 2)).toBe(2);
    expect(getDigit(123, 3)).toBe(1);
  });
});
