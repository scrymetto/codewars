function tribonacci(signature,n){
    let result = [];
    signature.forEach(function (item) {
        result.push(item)
    });
    let i = 0;
    if (n === 0){
        return []
    }
    if (n === 1){
        return [result[0]]
    }
    do {
        result.push(result[i] + result[i + 1] + result[i + 2]);
        i++
    } while (i < n - 3);
    return result
}

console.log(tribonacci([1,1,1],10));