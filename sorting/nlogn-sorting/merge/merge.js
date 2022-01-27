function merge(sortedL, sortedR) {
  //
  let [leftLength, rightLength] = [sortedL.length, sortedR.length];
  let [i, j] = [0, 0];
  const answer = [];
  let temp;
  while (i < leftLength && j < rightLength) {
    if (sortedL[i] < sortedR[j]) {
      answer.push(sortedL[i]);
      i++;
    } else {
      answer.push(sortedR[j]);
      j++;
    }
    if (i === leftLength) temp = "l";
    if (j === rightLength) temp = "r";
  }

  if (temp === "l") {
    while (j < rightLength) {
      answer.push(sortedR[j]);
      j++;
    }
  } else {
    while (i < leftLength) {
      answer.push(sortedL[i]);
      i++;
    }
  }
  return answer;
}

export { merge };
