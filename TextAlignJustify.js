function justify(str, len) {

    let initArr = str.split(' ');
    let maxStr = '';
    let currentArr = [];
    let nextIndex = 0;
    do {
        maxStr = '';
        for (let i = nextIndex; i<initArr.length && maxStr.length + initArr[i].length < len; i++) {
            maxStr = maxStr + initArr[i] + ' ';
            nextIndex = i + 1;
        }
        maxStr = maxStr.split(' ');
        maxStr.length = maxStr.length-1;
        maxStr.join(' ');
        console.log(maxStr);
        currentArr.push(maxStr)
    } while (nextIndex < initArr.length-1);
    console.log(currentArr)
    //return
}

console.log(justify('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget.', 30));