import { bubbleSort } from "./bubble-sort";
it("test bubble sort works correctly", () => {
  const arr = [2, 4, 6, 7, 1, 3, 5];
  expect(bubbleSort(arr)).toEqual([1, 2, 3, 4, 5, 6, 7]);
});
