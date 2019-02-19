function multiply(a, b) {

    if (a.length < 10 && b.length < 10) {
        return +a * +b + ''
    }
    let arrA = a.split('').reverse();
    let arrB = b.split('').reverse();
    let resultArr = [];
    for (let i = 0; i < arrB.length; i++) {
        let currentArr = [];
        for (let k = 1; k <= i; k++) {
            currentArr.push(0)
        }
        for (let j = 0; j < arrA.length; j++) {
            currentArr.push(arrA[j] * arrB[i])
        }
        if (resultArr.length === 0) {
            resultArr = currentArr;
        } else {
            resultArr.push(0);
            resultArr = resultArr.map((value, index) => value + currentArr[index]);
        }
    }
    let resultEnd = [];
    let sign = 0;
    resultArr.forEach((value, index) => {
        if (index !== resultArr.length - 1) {
            resultEnd.push(+(value + sign) % 10);
            sign = Math.floor((value + sign) / 10)
        } else {
            resultEnd.push(+(value + sign))
        }
    });
    resultEnd = resultEnd.reverse();
    if (resultEnd[0] === 0) {
        resultEnd.splice(0, 1)
    }
    return resultEnd.join('')
}

console.log(multiply('733', '854'));

