function tickets(peopleInLine) {
    if (peopleInLine[0] !== 25) {
        return 'NO'
    }
    let a = 0, b = 0;
    for (let i = 0; i < peopleInLine.length; i++) {
        switch (peopleInLine[i]) {
            case 25:
                a++;
                break;
            case 50:
                if (a >= 1) {
                    b++;
                    a--;
                } else return 'NO';
                break;
            case 100:
                if (b >= 1 && a >= 1) {
                    b--;
                    a--;
                } else {
                    if (a >= 3) {
                        a = a - 3;
                    } else return 'NO'
                }
        }
    }
    return 'YES'
}

console.log(tickets([25, 25, 50]));