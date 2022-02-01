import { pivot } from "./pivot";

test("test pivot function", () => {
  const testArr = [5, 9, 3, 1, 8, 7];
  //[1,3,5,7,8,9]

  const afterPivot = [];
  expect(pivot(testArr, 0, testArr.length - 1)).toBe(2);
  expect(testArr).toEqual([1, 3, 5, 9, 8, 7]);
});
