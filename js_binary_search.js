function binarySearch(num, array) {
  'use strict';
  var sortedArray = array.sort();
  var low = 0;
  var high = array.length -1;
  console.log(sortedArray);

  while (high >= low) {
    var middle = Math.floor((high + low) / 2);

    if (array[middle] < num) {
      low = middle + 1;
    }

    else if (array[middle] > num) {
      high = middle -1;
    }

    else {
      return middle;
    }
  }
  return -1;
}


var testArray = [0,4,7,8,5,7,2,9,0,12,14];
console.log(binarySearch(5, testArray));