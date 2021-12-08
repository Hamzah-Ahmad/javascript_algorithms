// Fibonacci series:
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, ...
function fib(n) {
    let numbers = [1, 1];
    for (let i = 2; i < n + 1; i++) {
        console.log(i)
        numbers.push(numbers[i - 2] + numbers[i - 1]);
    }
    console.log(numbers)
    return numbers[n];
}

console.log(fib(4))
console.log(fib(6))
console.log(fib(9))
console.log(fib(13))

function indexOfNum(num) {
    let numbers = [1, 1];
    let x = 0;
    let ind = 2;
    while (x != num) {
        if(x > num) return undefined
        numbers.push(numbers[ind - 2] + numbers[ind - 1]);
        x = numbers[ind] 
        ind = ind + 1;

    }
    return (ind - 1);
}

console.log(indexOfNum(13));