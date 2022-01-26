import { swap } from "./swap";
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    //idx는 계속올라감
    for (let j = i; j > 0; j--) {
      //j는 올라간 인덱스 -1 부터 계속 -1하면서 비교
      if (arr[j - 1] > arr[j]) {
        //만약 자기보다 큰거발견하면 스왑
        swap(arr, j - 1, j);
      } else {
        //작은거 발견하면 break
        break;
      }
    }
  }
  return arr;
}

export { insertionSort };
