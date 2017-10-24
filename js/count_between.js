function countBetween(array, lowerBound, upperBound) {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] >= lowerBound && array[i] <= upperBound) {
      count++;
    }
  }
  return count;
}