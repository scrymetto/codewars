function nextSmaller(n) {
    let arr = (n + '').split('');
    let resultArr = [];
    let result = -1;
    for (let i = arr.length - 1; i >= 0; i--) {
        let current = arr[i];
        for (let j = arr.length - 1; j >= 0; j--) {
            let tempArr = arr.slice();
            let prev = arr[j];
            if (prev > current) {
                tempArr[j] = current;
                tempArr[i] = prev;
                if ((0 + tempArr.join('')) < n && tempArr[0] !== '0') {
                    result = + tempArr.join('');
                    resultArr.push(result);
                }
            }
        }
    }
    if (resultArr[0]){
        console.log(resultArr)
        return resultArr.reduce((previousValue, currentValue) =>
            previousValue>currentValue ? previousValue:currentValue);
    } else return -1
}

console.log(nextSmaller(123456908));