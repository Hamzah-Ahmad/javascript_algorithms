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