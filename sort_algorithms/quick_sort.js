function quickSort(arr) {
    if (arr.length <= 1) return arr;
    var pivot = arr[arr.length - 1];
    var left = [];
    var right = [];
  
    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  
  var arr = [2, 1, 7, 9, 4, 8, 6];
  let res = quickSort(arr)

