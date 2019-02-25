function decompose(n) {

    function isRepeat(arr) {
        let arrNew = [];
        for (let i = 0; i < arr.length; i++) {
            if (arrNew.indexOf(arr[i]) > 0) {
                return true
            } else {
                arrNew.push(arr[i])
            }
        }
    }

    let result = [];
    let summed = n - 1;
    let residue = n * n;
    do {
        if (summed * summed > residue) {
            summed--;
        } else {
            residue -= summed * summed;
            result.push(summed)
        }
    } while (summed);

    if (isRepeat(result) === true) {
        let nextInd = result.length;
        while (isRepeat(result) === true && nextInd > 0) {
            for (let i = 1; i < result.length; i++) {
                if (result[i] === result[i - 1]) {
                    nextInd = i - 2;
                    break;
                }
            }
            let nextVal = result[nextInd];
            console.log(nextVal);
            result.splice(nextInd);
            result.push(nextVal-1);
            let sum = result.reduce((previousValue, currentValue) => previousValue+currentValue*currentValue);
            console.log(sum);
            residue = n*n-sum;
            console.log(residue);
            summed = result[result.length-1];
            console.log(summed);
        }
    }
    //if (isRepeat(result) === true) {
    //    return []
    //} else {
        return result
    //}
}

console.log(decompose(50));