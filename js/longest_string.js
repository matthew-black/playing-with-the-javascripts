function longestString(strings) {
  if (strings.length == 0) { return null;  }
  else {
    var longest = ""
    for (i = 0; i < strings.length; i++) {
      if (longest.length < strings[i].length) {
        longest = strings[i];
      }
    }
  return longest;
  }
}
