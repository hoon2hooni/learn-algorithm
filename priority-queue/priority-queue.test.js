import { Node, PriorityMinQueue } from "./priority-queue";

const priorities = [6, 3, 4, 9, 1];

const values = ["a", "b", "c", "d", "e"];

const myPriorityMinQueue = new PriorityMinQueue();
priorities.forEach((priority, idx) => {
  myPriorityMinQueue.insert(new Node(values[idx], priority));
});

describe("test Priority Min Queue", () => {
  const minSortedPriorities = [1, 3, 4, 6, 9];
  const testedPriorities = [];
  it("test for insert and extract together", () => {
    priorities.forEach((_) => {
      testedPriorities.push(myPriorityMinQueue.extract().priority);
    });
    expect(testedPriorities).toEqual(minSortedPriorities);
  });
});
