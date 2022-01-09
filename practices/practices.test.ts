import { Stack, Queue } from "./practices";

it("stack", () => {
  const testStack = new Stack();
  testStack.push(1);
  testStack.push(2);
  expect(testStack.pop()).toBe(2);
  expect(testStack.pop()).toBe(1);
});

it("Queue", () => {
  const testQueue = new Queue();
  console.log(testQueue);
  testQueue.enqueue(1);
  testQueue.enqueue(2);
  expect(testQueue.dequeue()).toBe(1);
  expect(testQueue.dequeue()).toBe(2);
});
