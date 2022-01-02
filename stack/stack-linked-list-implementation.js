class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);
    //시작 조건
    if (!this.first) {
      this.first = this.last = newNode;
      this.size++;
      return;
    }

    //추가되는애의 next를 마지막노드 가리킴
    newNode.next = this.last;
    //마지막 노드를 추가되는 노드로 갱신시킴
    this.last = newNode;
    //사이즈 추가
    this.size++;
    return;
  }

  pop() {
    if (!this.first) {
      throw new Error("this stack is already empty");
    }
    const temp = this.last;
    if (this.first === this.last) {
      this.first = null;
    }
    this.last = temp.next;
    this.size--;
    return temp.value;
  }
}

const aStack = new Stack();
aStack.push(3);
aStack.push(4);

console.log(aStack.pop());
console.log(aStack.pop());
console.log(aStack);
