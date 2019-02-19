function mixedFraction(s) {

    function findGds(denominator, numerator) {
        let r1 = denominator - numerator * Math.floor(denominator / numerator);
        let r2 = numerator - r1 * Math.floor(numerator / r1);
        if (r1 === 0) return numerator;
        if (r2 !== 0) {
            return findGds(r1, r2)
        } else return r1
    }

    let sign = false;
    let input = s.split('/');
    input = input.map(value => {
        value = +value;
        if (value < 0) {
            sign = !sign;
            return 0 - value
        }
        return value
    });
    let numerator = input[0];
    let denominator = input[1];
    if (denominator === 0) {
        throw new Error("Must raise ZeroDivisionError")
    }
    if (numerator === 0) {
        return '0'
    }
    if (numerator % denominator === 0) {
        let result = numerator / denominator + '';
        return sign ? '-' + result : result;
    }
    let newDenominator, int, newNumerator, gds;
    let result = [];
    if (numerator < denominator) {
        gds = findGds(numerator, denominator);
        newDenominator = denominator / gds;
        newNumerator = numerator / gds;
        result.push(newNumerator, newDenominator);
        result = result.join('/');
    } else {
        int = Math.floor(numerator / denominator);
        newNumerator = numerator - int * denominator;
        gds = findGds(newNumerator, denominator);
        newNumerator = newNumerator / gds;
        newDenominator = denominator / gds;
        result.push(newNumerator, newDenominator);
        result = result.join('/');
        result = int + ' ' + result;
    }
    return sign ? '-' + result : result;
}

console.log(mixedFraction('4/6'));