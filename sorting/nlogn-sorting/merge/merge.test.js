import { merge } from "./merge";

const sortedLeft = [1, 9, 10, 100];
const sortedRight = [3, 7, 25];
const answer = [1, 3, 7, 9, 10, 25, 100];
it("test merge function", () => {
  expect(merge(sortedLeft, sortedRight)).toEqual(answer);
});
