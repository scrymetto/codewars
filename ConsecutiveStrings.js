function longestConsec(strarr, k) {

    let n = strarr.length;
    if (n === 0 || k > n || k <= 0) {
        return '';
    }

    let result = '';
    for (let i = 0; i <= strarr.length - k; i++) {
        let intermed = '';
        for (let j = i; j < i + k; j++) {
            intermed += strarr[j];
        }
        if (intermed.length > result.length) {
            result = intermed;
        }
    }
    return result

}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2));