class Node {
  value: any;
  next: null | Node;
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  top: null | Node;
  constructor() {
    this.top = null;
  }

  push(value): void {
    const newNode = new Node(value);
    if (this.top === null) {
      this.top = newNode;
      return;
    }
    newNode.next = this.top;
    this.top = newNode;
    return;
  }

  pop(): any {
    if (this.top === null) {
      throw new Error("this is an empty");
    }
    const current = this.top;
    this.top = current.next;
    return current.value;
  }
}

class Queue {
  head: Node | null;
  tail: Node | null;
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    //노드 만들음
    if (this.tail) {
      this.tail.next = newNode;
      this.tail = this.tail.next;
    }
  }

  dequeue(): any {
    if (this.head === null) {
      throw new Error("this is empty queue");
    }
    const currentNode = this.head;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
    return currentNode.value;
  }
}
export { Stack, Queue };
