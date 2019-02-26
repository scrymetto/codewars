function decompose(n) {

    function isRepeat(arr) {
        let arrNew = [];
        for (let i = 0; i < arr.length; i++) {
            if (arrNew.indexOf(arr[i]) >= 0) {
                return true
            } else {
                arrNew.push(arr[i])
            }
        }
    }

    function findSquare(arr, summed, residue) {
        do {
            if (summed * summed > residue) {
                summed--;
            } else {
                residue -= summed * summed;
                result.push(summed)
            }
        } while (summed);
        return result
    }

    let result = [];
    let summed = n - 1;
    let residue = n * n;

    result = findSquare(result, summed, residue);

    if (isRepeat(result) === true) {
        let nextInd = result.length;
        while (isRepeat(result) === true) {
            for (let i = 1; i < result.length; i++) {
                if (result[i] === result[i - 1]) {
                    nextInd = i - 2;
                    break;
                }
            }
            if (nextInd < 0) {
                nextInd = 0;
            } else {
                let nextVal = result[nextInd];
                result.splice(nextInd);
                result.push(nextVal - 1);
                let sum = result.map((currentValue) => currentValue * currentValue).reduce(((previousValue, currentValue) => previousValue + currentValue));
                residue = n * n - sum;
                summed = result[result.length - 1];
                result = findSquare(result, summed, residue)
            }
            if (isRepeat(result) === true && result[0] === 1) {
                result = []
            }
        }
    }
    if (!result[0]) {
        return null
    } else {
        return result.reverse()
    }
}

console.log(decompose(50));