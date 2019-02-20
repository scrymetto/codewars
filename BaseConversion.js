'use strict';

let Alphabet = {
    BINARY:        '01',
    OCTAL:         '01234567',
    DECIMAL:       '0123456789',
    HEXA_DECIMAL:  '0123456789abcdef',
    ALPHA_LOWER:   'abcdefghijklmnopqrstuvwxyz',
    ALPHA_UPPER:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ALPHA:         'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};

function convert(input, source, target) {

    if (source === target) return input;
    let sourceArr = source.split('');
    let targetArr = target.split('');
    let extended10 = [];
    let endRes = [];
    for (let i = 0; i < sourceArr.length; i++) {
        extended10.push(i + '')
    }
    let result10;
    switch (source) {
        case Alphabet.BINARY:
            result10 = parseInt(input, 2);
            break;
        case Alphabet.OCTAL:
            result10 = parseInt(input, 8);
            break;
        case Alphabet.DECIMAL:
            result10 = +input;
            break;
        case Alphabet.HEXA_DECIMAL:
            result10 = parseInt(input, 16);
            break;
        default:
            result10 = [];
            let al = input.split('');
            let arr10 = [];
            al.forEach(function (value) {
                let ind = sourceArr.indexOf(value);
                result10.push(extended10[ind]);
            });
            for (let i = result10.length - 1; i >= 0; i--) {
                arr10.push(result10[i])
            }
            result10 = arr10.reduce(function (previousValue, currentValue, currentIndex) {
                return previousValue + (currentValue * Math.pow(sourceArr.length, currentIndex))
            }, 0);
            break;
    }
    let result;
    switch (target) {
        case Alphabet.BINARY:
            return result10.toString(2);
        case Alphabet.OCTAL:
            return result10.toString(8);
        case Alphabet.DECIMAL:
            return result10 + '';
        case Alphabet.HEXA_DECIMAL:
            return result10.toString(16);
        default:
            let extended10result = [];
            for (let i = 0; i < targetArr.length; i++) {
                extended10result.push(i + '')
            }
            result = [];
            let arr = [];
            if (result10 < targetArr.length) {
                result.push(result10);
            } else {
                for (let i = 0; result10 >= targetArr.length; i++) {
                    arr.push(result10 % (targetArr.length));
                    result10 = Math.floor(result10 / (targetArr.length));
                    if (result10 < targetArr.length)
                        arr.push(result10)
                }
                for (let i = arr.length - 1; i >= 0; i--) {
                    result.push(arr[i])
                }
            }
            result.forEach(function (value) {
                let ind = extended10result.indexOf(value + '');
                endRes.push(targetArr[ind])
            });
            endRes = endRes.join('');
    }
    return endRes
}

console.log(convert("15", Alphabet.DECIMAL, Alphabet.BINARY));