function checkSyntax(string) {
    let arr = string.split('');
    let obj = {
        '{': '}',
        '(': ')',
        '<': '>',
        '[': ']',
    };
    let openBrackets = [];
    for (let i = 0; i < arr.length; i++) {
        let currSymbol = arr[i];
        let lastOpenBracket = openBrackets[openBrackets.length - 1];
        if (currSymbol === obj[lastOpenBracket]) {
            openBrackets.splice(openBrackets.length - 1, 1);
        } else {
            if (currSymbol in obj) {
                openBrackets.push(currSymbol);
            } else {
                if (currSymbol.search(/(})|(\))|(>)|(])/) >= 0) {
                    return 1
                }
            }
        }
    }
    return openBrackets.length > 0 ? 1 : 0
}

console.log(checkSyntax('{{(fghthm} )} '))
