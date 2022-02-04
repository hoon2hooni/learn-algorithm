function getDigit(num, order) {
  let numString = num.toString();
  if (numString.length < order) {
    return 0;
  }
  return parseInt(numString.charAt(numString.length - order));
}

function makeRadixBucket(arr, order) {
  let stdArr = [];
  for (const num of arr) {
    if (stdArr[getDigit(num, order)]) {
      stdArr[getDigit(num, order)].push(num);
    } else {
      stdArr[getDigit(num, order)] = [num];
    }
  }
  return stdArr;
}

function concatArr(arr) {
  let answer = arr.reduce((prev, curr) => {
    if (curr) {
      return prev.concat(curr);
    }
    return prev;
  }, []);
  return answer;
}

export { getDigit, makeRadixBucket, concatArr };
