function nextSmaller(n) {

    let curArr = [-1];

    function firstStep(n, m) {
        if (!m) {
            m = n
        }
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
                    if ((0 + tempArr.join('')) < m &&tempArr[0] !== '0') {
                        result = +tempArr.join('');
                        if (resultArr.indexOf(result) < 0) {
                            resultArr.push(result)
                        }
                    }
                }
            }
        }
        if (resultArr[0]) {
            console.log('first '+ resultArr)
            let curResult = resultArr.reduce((previousValue, currentValue) =>
                previousValue > currentValue ? previousValue : currentValue);
            console.log('twice  '+ curResult)

            if (curArr.indexOf(curResult) < 0 && curResult>curArr[curArr.length-1]) {
                curArr.push(curResult)
            }
            firstStep(curResult, n)
        } else return -1
    }

    firstStep(n);
    if (curArr[0]) {
        console.log(curArr)
        return curArr.reduce((previousValue, currentValue) =>
            previousValue > currentValue ? previousValue : currentValue)
    } else return -1
}

console.log(nextSmaller(8455 ));



