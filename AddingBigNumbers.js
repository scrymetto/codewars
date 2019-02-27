function add(a, b) {

    let result = [];
    let summed = [];
    let addend = [];
    if (+a > +b) {
        summed = a.split('').reverse();
        addend = b.split('').reverse();
    } else {
        summed = b.split('').reverse();
        addend = a.split('').reverse();
    }

    summed.forEach((value, index) => {
        if (!addend[index]) {
            addend[index] = 0
        }
        result.push(+value+ +addend[index])
    });

    let current = 0;
    result = result.map((value, index) => {
        let digit;
        if (index!==result.length-1) {
            digit = (current + value) % 10;
            current = Math.floor((current + value) / 10)
        } else {
            digit = value+current
        }
        return digit
    });

    return result.reverse().join('')
}

console.log(add('111', '9'));