function factorial (n) {
    if(n == 1) return 1
    return n * factorial(n-1)
}

let res = factorial (4)

// Without Recursion
function nonRecursiveFactorial(n) {
    let res = n;
    for(let i = n-1; i>0;  i--){
        res =  res * i;
    }
    return res;
}

let otherRes = nonRecursiveFactorial(4)
