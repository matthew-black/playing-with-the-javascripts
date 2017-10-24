function pad(array, minSize, value) {
  if (array.length >= minSize) {
    var padded = array.slice(0);
    return padded;
  }
  else {
    var padded = array.slice(0);
    if (!value) {
      var value = null;
    }
    var pad_count = minSize - array.length;
    for (i = 0; i < pad_count; i++) {
      padded.push(value);
    }
  return padded;
  }
}
