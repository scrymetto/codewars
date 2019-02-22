function decompose(n) {

    function isRepeat(arr) {
        let arrNew = [];
        for (let i = 0; i < arr.length; i++) {
            if (arrNew.indexOf(arr[i]) > 0) {
                return false
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

    if (isRepeat(result) === false) {
        return false
    } else {
        return result
    }
}

console.log(decompose(5));