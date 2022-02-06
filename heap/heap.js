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

  /**
   * 1. 루트 제
   * 2. 맨 마지막 원소 위로 보ㅁ
   * 3. (반복)
   *     자식들 보다 크면
   *        반복문 out
   *     왼쪽 자식(2n + 1), 오른쪽 자식 비교(2n + 2)
   *     swap(현재 인덱스, 더큰 자식 인덱스)
   *     현재 인덱스 = 더큰 자식 인덱스로 초기화
   *   경계 조건
   *   1. 자식들 인덱스 있는지?
   *   2. 자식들 인덱스 하나만 있는지?
   *
   * 자식이 없는 경우
   *
   * 자식이 1개 있는경우
   *
   * 자식이 2개 있는경우
   */
  extract() {
    if (!this.values) {
      throw new Error("this is already empthy heap");
    }
    let idx = 0;
    const returnValue = this.values[idx];
    this.values[idx] = this.values.pop();
    const limitIdx = this.values.length - 1;
    while (true) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let parent = this.values[idx];
      let leftChild = this.values[leftIdx];
      let rightChild = this.values[rightIdx];
      //자식이 없는 경우
      if (leftIdx > limitIdx) {
        break;
        //자식이 하나만 있는 경우
      } else if (rightIdx > limitIdx) {
        if (leftChild > parent) {
          this.swap(idx, leftIdx);
          idx = leftIdx;
        }
        break;
      }
      //자식 2명 다 있는 경우
      //부모가 자식들보다 크면
      if (parent > leftChild && parent > rightChild) {
        break;
      }

      if (leftChild > rightChild) {
        this.swap(idx, leftIdx);
        idx = leftIdx;
      } else {
        this.swap(idx, rightIdx);
        idx = rightIdx;
      }
    }
    return returnValue;
  }
}

export { MaxBinaryHeap };
