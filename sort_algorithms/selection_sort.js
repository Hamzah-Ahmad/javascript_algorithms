//Explanation (from geeksforgeeks.org):
// The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.
// 1) The subarray which is already sorted. 
// 2) Remaining subarray which is unsorted.
// In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray. 
// Its average and worst case complexities are of Ο(n2), where n is the number of items.
function selectionSort(arr) {
    let min
    for(let i = 0; i<arr.length; i++){
        min = i;
        for(let j = i + 1; j <arr.length; j++){
            if(arr[j] < arr[min]) min = j
        }
        if(i !== min){
            [arr[i], arr[min]] = [arr[min], arr[i]]
        }
    }
    return arr
}

let res = selectionSort([5,2,14,6,3,5,4])
console.log(res)