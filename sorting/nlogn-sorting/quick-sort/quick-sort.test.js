import { pivot } from "./pivot";
import { pivot as pivotSolution } from "./pivot-solution";
import { quickSort } from "./quick-sort";
test("test pivot function", () => {
  const testArr = [5, 9, 3, 1, 8, 7];

  //[1,3,5,7,8,9]
  expect(pivotSolution(testArr, 0, testArr.length - 1)).toBe(2);
  expect(testArr).toEqual([1, 3, 5, 9, 8, 7]);
});

test("test quick sort function", () => {
  const testArr = [4, 8, 2, 1, 5, 7, 6, 3];

  expect(quickSort(testArr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});
