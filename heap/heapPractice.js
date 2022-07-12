import { textSpanIntersectsWithPosition } from "typescript";

function heapify(numbers) {
  let heap = [];
  numbers.forEach((num, index) => {
    heap.push(num);
    heap = heapOla(heap);
    //올라가게 하는 과정
  });
  return heap;
}

function heapOla(heap, idx = heap.length - 1) {
  if (idx === 0) {
    return heap;
  }

  //재귀적으로 하자.
  if (heap[idx] > heap[getHalfIndex(idx)]) {
    heap = swap(heap, idx, getHalfIndex(idx));
    heap = heapOla(heap, getHalfIndex(idx));
  }
  return heap;
}

function getHalfIndex(n) {
  return Math.floor((n - 1) / 2);
}

function swap(array, i, b) {
  const swapped = [...array];
  swapped[i] = array[b];
  swapped[b] = array[i];
  return swapped;
}

export { heapify, heapOla, getHalfIndex, swap };
