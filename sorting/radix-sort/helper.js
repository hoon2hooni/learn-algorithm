function getDigit(num, order) {
  let numString = num.toString();
  if (numString.length < order || num === 0) {
    return 0;
  }
  return parseInt(numString.charAt(numString.length - order));
}

export { getDigit };
