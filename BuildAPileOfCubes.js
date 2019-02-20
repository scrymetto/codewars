function findNb(m) {
    let i = 1;
    let volume = 1;
    let volumeBild = 0;
    while (volumeBild <= m) {
        volume = Math.pow(i, 3);
        volumeBild += volume;
        if (volumeBild === m) {
            return i
        }
        i++;
    }
    return (-1);

}

console.log(findNb(1071225));