function dnaStrand(dna){
    let string = dna.split('');
    for (let i in string){
        switch (string[i]) {
            case 'A':
                string[i] = 'T';
                break;
            case 'T':
                string[i] = 'A';
                break;
            case 'G':
                string[i] = 'C';
                break;
            case 'C':
                string[i] = 'G';
                break;
        }
    }
    return string.join('');
}

console.log(dnaStrand("ATTGC"));