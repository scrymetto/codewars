function nbYear(p0, percent, aug, p) {
    let inhabitants = p0;
    let result = 0;
    for (let i = 1; inhabitants <p; i++) {
        inhabitants = inhabitants+inhabitants/100*percent+aug;
        result = i;
    }
    return result
}

console.log(nbYear(1500, 5, 100, 5000));