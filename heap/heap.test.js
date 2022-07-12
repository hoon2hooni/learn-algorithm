import { heapify, heapOla, swap } from "./heapPractice";
import { MaxBinaryHeap } from "./heap";

describe("check Heap Methods", () => {
  const MBH = new MaxBinaryHeap();
  it("check insert", () => {
    const inputArray = [5, 1, 2, 3, 4, 6];
    for (const value of inputArray) {
      MBH.insertFromUdemy(value);
    }

    const answerArray = [6, 4, 5, 1, 3, 2];
    expect(MBH.values).toEqual(answerArray);
  });

  it("check extract", () => {
    expect(MBH.extract()).toBe(6);
    expect(MBH.values).toEqual([5, 4, 2, 1, 3]);
    expect(MBH.extract()).toBe(5);
    expect(MBH.values).toEqual([4, 3, 2, 1]);
  });
});

describe("check heap practice", () => {
  let testArray;
  beforeEach(() => {
    testArray = [5, 1, 2, 3, 4, 6];
  });
  it("check swap", () => {
    expect(swap(testArray, 1, 2)).toEqual([5, 2, 1, 3, 4, 6]);
  });
  it("check heap ola", () => {
    expect(heapOla(testArray, 5)).toEqual([6, 1, 5, 3, 4, 2]);
  });
  it("check heapify", () => {
    expect(heapify(testArray)).toEqual([6, 4, 5, 1, 3, 2]);
  });
});
