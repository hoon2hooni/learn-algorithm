//
class MaxHeap {
  values: number[];
  constructor() {
    this.values = [];
  }
  insert(value: number): void {
    this.values.push(value);
    this.bubbleUp();
  }
  bubbleUp(): void {
    let idx = this.values.length - 1;
    let currentValue = this.values[idx];
    while (idx) {
      const parentIdx = Math.floor((idx - 1) / 2);
      if (currentValue < this.values[parentIdx]) break;
      this.swap(idx, parentIdx);
      idx = parentIdx;
    }
    return;
  }

  swap(idx: number, idx2: number) {
    let left = this.values[idx];
    let right = this.values[idx2];
    this.values[idx] = right;
    this.values[idx2] = left;
  }

  extract(): number {
    const max = this.values[0];
    if (this.values.length > 1) {
      this.values[0] = this.values.pop() as number;
      this.sinkDown();
    }
    return max;
  }

  sinkDown(): void {
    const limit = this.values.length;
    let idx = 0;
    let swapIdx = 0;
    while (true) {
      let canSwap = false;
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      if (leftIdx < limit) {
        if (this.values[idx] < this.values[leftIdx]) {
          swapIdx = leftIdx;
          canSwap = true;
        }
      }

      if (rightIdx < limit) {
        if (
          (!canSwap && this.values[idx] < this.values[rightIdx]) ||
          (canSwap && this.values[leftIdx] < this.values[rightIdx])
        ) {
          swapIdx = rightIdx;
          canSwap = true;
        }
      }
      if (!canSwap) break;
      this.swap(idx, swapIdx);
      idx = swapIdx;
    }
  }
}

export { MaxHeap };
