function squareDigits(num){
    let result = [];
    let arr = (num+'').split('').forEach(function (item) {
        result.push(Math.pow(item, 2))
    });
    return +result.join('')
}

console.log(squareDigits(9119));