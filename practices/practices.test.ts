import { Stack, Queue, BinarySearchTree } from "./practices";

it("stack", () => {
  const testStack = new Stack();
  testStack.push(1);
  testStack.push(2);
  expect(testStack.pop()).toBe(2);
  expect(testStack.pop()).toBe(1);
});

it("Queue", () => {
  const testQueue = new Queue();
  testQueue.enqueue(1);
  testQueue.enqueue(2);
  expect(testQueue.dequeue()).toBe(1);
  expect(testQueue.dequeue()).toBe(2);
});

it("Binary Search Tree", () => {
  const testBinarySearchTree = new BinarySearchTree();
  const testArray = [7, 5, 6, 4, 10, 8, 12];
  for (const number of testArray) {
    testBinarySearchTree.insert(number);
  }

  expect(testBinarySearchTree.root?.value).toBe(7);
  expect(testBinarySearchTree.root.left.left?.value).toBe(4);
  expect(testBinarySearchTree.root.right.left?.value).toBe(8);
});
