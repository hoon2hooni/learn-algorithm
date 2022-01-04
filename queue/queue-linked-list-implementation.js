class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  dequeue() {
    if (this.isEmpty()) throw new Error("this Queue is Empty");
    const returnValue = this.head.value;
    this.head = this.head.next;
    return returnValue;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
  }

  peek() {
    if (this.isEmpty()) throw new Error("this Queue is Empty");
    return this.tail.value;
  }
  ß;
  isEmpty() {
    return this.head === null;
  }
}

const aQueue = new Queue();
aQueue.enqueue(3);
aQueue.enqueue(4);
aQueue.enqueue(5);

console.log(aQueue);
console.log(aQueue.dequeue());
console.log(aQueue);
console.log(aQueue.dequeue());
console.log(aQueue.dequeue());
