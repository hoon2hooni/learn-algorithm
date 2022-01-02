/**
 * 강의 듣기전 혼자 만들어본 코드!
 */
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
    const pushedNode = new Node(value);

    if (this.size === 0) {
      this.first = this.last = pushedNode;
      this.size++;
      return;
    }

    //추가되는애의 next를 마지막노드 가리킴
    pushedNode.next = this.last;
    //마지막 노드를 추가되는 노드로 갱신시킴
    this.last = pushedNode;
    //사이즈 추가
    this.size++;
    return;
  }

  pop() {
    //경계 1 사이즈 0일때
    if (this.size === 0) {
      throw new Error("this stack is already empty");
    }
    const poppedValue = this.last.value;
    //경계 2 사이즈 1일때
    if (this.size === 1) {
      this.first = this.last = null;
      this.size--;
      return poppedValue;
    }

    const soonLast = this.last.next;
    this.last = soonLast;
    this.size--;
    return poppedValue;
  }
}

// const aStack = new Stack();
// aStack.push(3);
// aStack.push(4);
// aStack.push(5);
// console.log(aStack.pop());
// console.log(aStack.pop());
// console.log(aStack.pop());
// aStack.push(1000);
// aStack.pop();
// console.log(aStack);
