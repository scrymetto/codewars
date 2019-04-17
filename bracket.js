function checkSyntax(string) {
    let arr = string.split('');
    let obj = {
        '{': '}',
        '(': ')',
        '<': '>',
        '[': ']',
    };
    let closeNext = '';
    let currentArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === closeNext) {
            currentArr.splice(currentArr.length - 1, 1);
            closeNext = obj[currentArr[currentArr.length - 1]];
        } else {
            if (arr[i] in obj) {
                currentArr.push(arr[i]);
                closeNext = obj[arr[i]]
            } else {
                for (let key in obj) {
                    if (arr[i] === obj[key]) {
                        return 1
                    }
                }
            }
        }
    }
    return 0
}

console.log(checkSyntax('   (      [)'))
