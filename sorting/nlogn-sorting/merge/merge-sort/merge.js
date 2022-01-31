function merge(sortedL, sortedR) {
  //
  let [leftLength, rightLength] = [sortedL.length, sortedR.length];
  let [i, j] = [0, 0];
  const answer = [];
  while (i < leftLength && j < rightLength) {
    if (sortedL[i] < sortedR[j]) {
      answer.push(sortedL[i]);
      i++;
    } else {
      answer.push(sortedR[j]);
      j++;
    }
  }

  while (j < rightLength) {
    answer.push(sortedR[j]);
    j++;
  }
  while (i < leftLength) {
    answer.push(sortedL[i]);
    i++;
  }

  return answer;
}

export { merge };
