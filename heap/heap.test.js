import { MaxBinaryHeap } from "./heap";

it("test Max Binary Heap", () => {
  const MBH = new MaxBinaryHeap();
  const inputArray = [5, 1, 2, 3, 4, 6];
  for (const value of inputArray) {
    MBH.insertFromUdemy(value);
  }

  const answerArray = [6, 4, 5, 1, 3, 2];
  expect(MBH.values).toEqual(answerArray);
});
