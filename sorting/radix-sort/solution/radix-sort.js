import { getDigit, getMostDigit } from "./radix-helper";

function radixSort(numbers) {
  const mostDigit = getMostDigit(numbers);
  for (let i = 0; i < mostDigit; i++) {
    const radixBucket = Array.from({ length: 10 }, () => []);
    numbers.forEach((number) => {
      radixBucket[getDigit(number, i)].push(number);
    });
    numbers = [].concat(...radixBucket);
  }
  return numbers;
}

export { radixSort };
