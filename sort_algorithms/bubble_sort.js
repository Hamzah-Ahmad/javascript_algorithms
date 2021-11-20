// Explanation
// Bubble sort is a simple sorting algorithm. The method works by examining each set of adjacent elements in the string, from left to right, switching their positions if they are out of order. The algorithm then repeats this process until it can run through the entire string and find no two elements that need to be swapped.
// Its average and worst case complexity are of Ο(n2) where n is the number of items.
function bubbleSort(arr) {
    for(let i = arr.length - 1; i > 0; i--){ 
        for(let j = 0; j < i; j++){
            if(arr[j] > arr[j + 1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]] //Swapping the two values via array destructuring
            }
        }
    }
    return arr;
}

console.log(bubbleSort([3,6,1,10,2,9,4]))