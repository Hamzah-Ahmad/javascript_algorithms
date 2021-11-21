// Binary Search: Search a sorted array by repeatedly dividing the search interval in half. Begin with an interval covering the whole array. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. Otherwise, narrow it to the upper half. Repeatedly check until the value is found or the interval is empty.
// Big O: (log n)

function binarySearch(arr, val) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2); //we could have use Math.ceiling here instead.
    while (arr[middle] !== val && start <= end) {
      if (val < arr[middle]) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
      middle = Math.floor((start + end) / 2);
    }
    if (arr[middle] === val) return middle;
    return -1;
  }

let res = binarySearch([11,2,5,9,12], 5)
console.log(res)  