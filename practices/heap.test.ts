import { MaxHeap } from "./heap";

describe("check Heap Methods", () => {
  const MBH = new MaxHeap();
  it("check insert", () => {
    const inputArray = [5, 1, 2, 3, 4, 6];
    for (const value of inputArray) {
      MBH.insert(value);
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
