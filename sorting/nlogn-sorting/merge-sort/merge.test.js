import { merge } from "./merge";
import { mergeSort } from "./merge-sort";
const sortedLeft = [1, 9, 10, 100];
const sortedRight = [3, 7, 25];
const answer = [1, 3, 7, 9, 10, 25, 100];
it("test merge function", () => {
  expect(merge(sortedLeft, sortedRight)).toEqual(answer);
});

it("test merge sort", () => {
  expect(mergeSort([3, 7, 1, 25, 9, 10, 100])).toEqual(answer);
});
