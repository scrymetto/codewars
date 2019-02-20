function incrementString(strng) {

    let resultArrLet = [];
    let resultArrNum = [];
    let num = false;
    for (let i = 0; i < strng.length; i++) {
        if (isNaN(+strng[i])) {
            resultArrLet.push(strng[i]);
        } else {
            resultArrNum.push(+strng[i]);
            num = true;
        }
    }
    if (!num) {
        resultArrLet.push(1)
    } else {
        for (let i = resultArrNum.length - 1; i >= 0; i--) {
            if (resultArrNum[i] !== 9) {
                resultArrNum[i]++;
                break
            } else {
                if (resultArrNum[i] === 9 && i !== 0) {
                    resultArrNum[i] = 0;
                } else {
                    resultArrNum[i] = 0;
                    resultArrNum.splice(0, 0, 1)
                }
            }
        }
    }
    return resultArrLet.join('') + resultArrNum.join('')
}

console.log(incrementString('foo0042'));