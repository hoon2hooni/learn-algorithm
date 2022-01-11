class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  //this.values 마지막에 보내고 조건 만족할 때까지 부모랑 교환
  //마지막에 보낸다
  // 뿌리까지 반복
  // * 바로 직후의 부모와 비교한다 *
  // * 부모보다 크면 올린다 *
  // * 안되면 반복 멈춘다
  insert(value) {
    let insertedIndex = this.values.length;

    this.values[insertedIndex] = value;
    if (!insertedIndex) {
      return;
    }

    while (insertedIndex) {
      let currentParentIndex = parseInt((insertedIndex - 1) / 2);
      if (this.values[currentParentIndex] > value) break;
      this.swap(currentParentIndex, insertedIndex);
      insertedIndex = currentParentIndex;
    }
    return;
  }
  insertFromUdemy(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element < parent) break;
      this.swap(idx, parentIdx);
      idx = parentIdx;
    }
  }

  // * 내려간 자식은 그 아래 자식들 보다 무조건 *

  swap(a, b) {
    const indexLimit = this.values.length - 1;
    if (a > indexLimit || b > indexLimit) {
      throw new Error("one of the indexes are bigger than limit of this heap");
    }

    const aValue = this.values[a];
    const bValue = this.values[b];

    this.values[a] = bValue;
    this.values[b] = aValue;
    return;
  }
}

export { MaxBinaryHeap };
