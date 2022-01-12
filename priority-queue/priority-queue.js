class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityMinQueue {
  constructor() {
    this.values = [];
  }
  insert(node) {
    this.values.push(node);
    this.bubbleUp();
  }
  //올려 올려 올려
  bubbleUp() {
    let idx = this.values.length - 1;
    while (idx) {
      parentNodeIdx = Math.floor((idx - 1) / 2);
      parentNode = this.values[parentIdx];
      currentNode = this.values[idx];
      if (currentNode.priority > parentPriority.priority) break;
      this.values[idx] = parentNode;
      this.values[parentIdx] = currentNode;
      idx = parentNodeIdx;
    }
    return;
  }

  extract() {
    const returnNode = this.values[0];
    this.sinkDown();
    return returnNode;
  }

  sinkDown() {
    let idx = 0;
    let limitIdx = this.values.length - 1;
    while (true) {
      this.values[0] = this.values.pop();
      currentNode = this.values[idx];
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      //[1, 3, 2, 6, 4, 5];
      let leftChildNode, rightChildNode;
      //자식이 없을 때
      if (leftChildIdx > limitIdx) {
        break;
      }
      //자식이 왼쪽 자식 하나일 때
      if (leftChildIdx < limitIdx && rightChildIdx >= limitIdx) {
        leftChildNode = this.values[leftChildIdx];
        if (currentNode.priority > leftChildNode.priority) {
          this.values[idx] = leftChildNode;
          this.values[leftChildIdx] = currentNode;
        }
        break;
      }
      // 부모가 자식 보다 우선순위 점수 낮을 때
      if (
        currentNode.priority < leftChildNode.priority &&
        currentNode.priority < rightChildNode.priority
      ) {
        break;
      }

      if (leftChildNode.priority < rightChildNode.priority) {
        this.values[idx] = leftChildNode;
        this.values[leftChildIdx] = currentNode;
        idx = leftChildIdx;
      } else {
        this.values[idx] = rightChildNode;
        this.values[rightChildIdx] = currentNode;
        idx = rightChildIdx;
      }
    }
  }

  sinkDownUdemy() {
    let idx = 0;
    let limitIdx = this.values.length - 1;
    while (true) {
      let currentNode = this.values[idx];
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let swap = null;
      let leftChildNode, rightChildNode;

      if (leftChildIdx < limitIdx) {
        leftChildNode = this.values[leftChildIdx];
        if (currentNode.priority > leftChildNode.priority) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < limitIdx) {
        rightChildNode = this.values[rightChildIdx];
        if (
          (swap === null && currentNode.priority > rightChildNode.priority) ||
          (swap !== null && leftChildNode.priority > rightChildNode.priority)
        ) {
          swap = rightChildIdx;
        }
      }

      if (!swap) {
        break;
      }

      this.values[idx] = this.values[swap];
      this.values[swap] = currentNode;
      idx = swap;
    }
  }
}

export { Node, PriorityMinQueue };
