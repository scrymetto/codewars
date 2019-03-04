function justify(str, len) {

    let initArr = str.split(' ');
    let maxStr = '';
    let currentArr = [];
    let nextIndex = 0;
    let result = [];
    do {
        maxStr = '';
        for (let i = nextIndex; i < initArr.length && maxStr.length + initArr[i].length <= len; i++) {
            maxStr = maxStr + initArr[i] + ' ';
            nextIndex = i + 1;
        }
        if (maxStr[maxStr.length - 1] === ' ') {
            maxStr = maxStr.split(' ');
            maxStr.length = maxStr.length - 1;
            maxStr = maxStr.join(' ')
        }
        currentArr.push(maxStr)
    } while (nextIndex < initArr.length - 1);
    maxStr = maxStr.split(' ');

    for (let i = 0; i < currentArr.length; i++) {
        let space = len - currentArr[i].length;
        if (space > 0 && i !== currentArr.length - 1) {
            let strArr = currentArr[i].split(' ');
            while (space !== 0) {
                for (let j = 0; j < strArr.length - 1 && space > 0; j++) {
                    strArr[j] += ' ';
                    space--
                }
            }
            result.push(strArr.join(' '));
        }
    }
    result.push(currentArr[currentArr.length - 1]);
    return result.join('\n')
}

console.log(justify('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.', 30));