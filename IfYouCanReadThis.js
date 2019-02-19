'use strict';
function to_nato(words) {
    let alphabet = {
        a: 'Alfa',
        b: 'Bravo',
        c: 'Charlie',
        d: 'Delta',
        e: 'Echo',
        f: 'Foxtrot',
        g: 'Golf',
        h: 'Hotel',
        i: 'India',
        j: 'Juliett',
        k: 'Kilo',
        l: 'Lima',
        m: 'Mike',
        n: 'November',
        o: 'Oscar',
        p: 'Papa',
        q: 'Quebec',
        r: 'Romeo',
        s: 'Sierra',
        t: 'Tango',
        u: 'Uniform',
        v: 'Victor',
        w: 'Whiskey',
        x: 'Xray',
        y: 'Yankee',
        z: 'Zulu'
    };
    let arr = words.toLowerCase()
        .split(' ');
    let result = arr.map(function (word) {
        let arrWord = word.split('');
                let res = arrWord.map(function(word){
            return alphabet[word]||word
        });
        return res.join(' ')
    });
    return result.join(' ')
}
console.log(to_nato('go for it!'));