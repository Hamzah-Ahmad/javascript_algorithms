// Explanation:
// Merge Sort is a Divide and Conquer algorithm. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves.
// Space Complexity:  O(n). A new array item sic reated for each item in the original array
// Time complexity: 
//  - Breaking apart: O(log n). 
//  - Merging arrays: O(n). 
//  - Combined compelexity O(n log n)

function merge (array1, array2){ // this function combines two arrays in one sorted array
    let combined = [];
    let i = 0;
    let j = 0;
    while(i<array1.length && j<array2.length){
        if(array1[i] < array2[j]){
            combined.push(array1[i])
            i++
        }
        else {
            combined.push(array2[j]);
            j++;
        }
    }
    while(i< array1.length){
        combined.push(array1[i])
        i++
    }
    while(j< array2.length){
        combined.push(array2[j])
        j++
    }

    return combined
}

function mergeSort(array) {
    if(array.length === 1) return array;

    let mid = Math.floor(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

let res = mergeSort([11,7,19,2,4,3,21,8,6])
console.log(res)