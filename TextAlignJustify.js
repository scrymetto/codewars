function justify(str, len) {

    let initArr = str.split(' ');
    let maxStr = '';
    let currentArr = [];
    let nextIndex = 0;
    let result = [];
    do {
        maxStr = '';
        for (let i = nextIndex; i < initArr.length && maxStr.length + initArr[i].length < len; i++) {
            maxStr = maxStr + initArr[i] + ' ';
            nextIndex = i + 1;
        }
        maxStr = maxStr.split(' ');
        maxStr.length = maxStr.length - 1;
        maxStr = maxStr.join(' ');
        currentArr.push(maxStr)
    } while (nextIndex < initArr.length - 1);

    for (let i = 0; i < currentArr.length; i++) {
        let space = len - currentArr[i].length;
        if (space > 0 && i !== currentArr.length - 1) {
            let strArr = currentArr[i].split(' ');
            while (space !== 0) {
                for (let j = 0; j < strArr.length - 1 && space > 0; j ++) {
                    strArr[j] += ' ';
                    space--
                }
            }
            result.push(strArr.join(' '));
        }
    }
    result.push(currentArr[currentArr.length-1]);
    return result.join('\n')
}

console.log(justify('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 50));