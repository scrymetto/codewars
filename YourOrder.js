'use strict';

function order(words) {
    let resultArr = [];
    let arr = words.split(' ');
    nextEther: for (let j = 1; j <= arr.length; j++) {
        for (let i = 0; i < arr.length; i++) {
            let x = arr[i].indexOf(j + '');
            if (x !== -1) {
                resultArr.push(arr[i]);
                continue nextEther;
            }
        }
    }
    return resultArr.join(' ')
}

console.log(order("is2 Thi1s T4est 3a"));