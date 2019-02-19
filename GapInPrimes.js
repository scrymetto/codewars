function gap(g, m, n) {

    let bool = [];
    let simple = [];
    let result = [];
    for (let i = 1; i <= n; i++) {
        bool[i] = true
    }
    let p = 2;
    do {
        for (i = 2 * p; i <= n; i += p) {
            bool[i] = false
        }
        for (i = p + 1; i < n; i++) {
            if (bool[i]) break;
        }

        p = i;
    } while (p * p < n);
    bool.forEach((value, index) => {
        if (value && index >= m) {
            simple.push(index)
        }
    });
    for (i = 0; i < simple.length; i++) {
        if (!isNaN(result[0])) break;
        if (simple[i] - simple[i - 1] === g) {
            result.push(simple[i - 1], simple[i])
        }
    }
    if (isNaN(result[0])) {
        result = 'null'
    }
    return result
}

console.log(gap(5, 11, 20));