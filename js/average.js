function total(nums) {
  return nums.reduce(function(sum, num) {
    return sum + num;
    })
}

function mean(nums) {
  return total(nums) / nums.length;
}

function median(nums) {
  var sorted = nums.sort();

  if (sorted.length % 2 != 0) {
    var index = Math.floor(sorted.length / 2);
    return sorted[index];
  }
  else {
    var index1 = Math.floor((sorted.length / 2) - 1);
    var index2 = Math.floor(sorted.length / 2);
    return (sorted[index1] + sorted[index2]) / 2;
  }
}

function mode(nums) { return modes(modeIndices(numCounts(nums)), uniq(nums)); };

  // This returns the mode(s) from the uniq function's array.
  function modes(modeIndices, uniq) {
    var modes = [];
    for (var i = 0; i < modeIndices.length; i++) {
      modes.push(uniq[modeIndices[i]]);
    }
    return modes;
  }

  // Generates an array containing indices that can be used to pull
  // the mode value(s) out of the uniq function's output.
  function modeIndices(numCounts) {
    var max = Math.max(...numCounts);
    var modeIndices = []
    for (var i = 0; i < numCounts.length; i++) {
      if (numCounts[i] == max) {
        modeIndices.push(i);
      }
    }
    return modeIndices;
  }

  // Makes an array where each value is a count of duplicate number
  // instances. Indices correspond to the array made by the
  // uniq function.
  function numCounts(nums) {
    var uniqueNums = uniq(nums)
    var numCounts = []
    for (var i = 0; i < uniqueNums.length; i++) {
      numCounts.push(numCount(uniqueNums[i], nums));
    }
    return numCounts;
  }

  // Counts how many times a given number exists inside an array.
  // Basically just a helper method for numCounts.
  function numCount(num, array) {
    var numCount = 0;
    for (var i = 0; i < array.length; i++) {
      if (array[i] === num) {
        numCount++;
      }
    }
    return numCount
  }

  // Creates an array without any duplicates. I think there might be
  // a fairly similar Ruby method...
  function uniq(nums) {
    var uniqueNums = []
    for (var i = 0; i < nums.length; i++) {
      if (!uniqueNums.includes(nums[i])) {
        uniqueNums.push(nums[i]);
      }
    }
    return uniqueNums;
  }