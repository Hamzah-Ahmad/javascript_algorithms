// Explanation:
// Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.
// Each item is compared to the items before it and moved based on the item's value 
// Big O in worst case scenario O(n^2). However, Insertion Sort is O(n) when you start with sorted (or almost sorted) data.
function insertionSort(arr) {
    let temp;
    for(let i = 1; i < arr.length; i++){
        temp = arr[i]
        for(var j = i -1; arr[j] > temp && j > -1; j--){ //Note we're using var instead of let as we need the j value outside of the for block
            arr[j+1] = arr[j]
        }
        arr[j+1] = temp
    }
    return arr;
}