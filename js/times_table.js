function timesTable(number) {
  var timesString = ""
  for (var x = 1; x < (number + 1); x++) {
    for (var y = 1; y < (number + 1); y++) {
      if (y < number) {
        timesString = timesString.concat( (x * y) + ' ' );
      }
      else {
        timesString = timesString.concat( (x * y) + '\n' );
      }
    }
  }
  return timesString;
}

