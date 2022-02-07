function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function getDigitCount(num) {
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function getMostDigit(numbers) {
  let maxDigits = 0;
  numbers.forEach((num) => {
    maxDigits = Math.max(getDigitCount(num), maxDigits);
  });
  return maxDigits;
}

export { getDigit, getDigitCount, getMostDigit };
