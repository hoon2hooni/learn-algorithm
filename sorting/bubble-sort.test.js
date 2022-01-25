import { bubbleSort } from "./bubble-sort";
describe("test bubble sort", () => {
  it("test bubble sort works correctly", () => {
    const arr = [2, 4, 6, 7, 1, 3, 5];
    expect(bubbleSort(arr)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it("test optimization bubble sort", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(bubbleSort(arr)).toEqual(arr);
  });
});
