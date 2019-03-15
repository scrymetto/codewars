class Dictionary {

    constructor() {
        this.words = [];
    }

    newEntry(key, value) {
        let word = {};
        word.key = key;
        word.value = value;
        this.words.push(word)
    }

    look(key) {
        for (let i = 0; i<this.words.length; i++){
            if (this.words[i].key===key) {
                return this.words[i].value;
            }
        }
        return `Can\'t find entry for ${key}`
    }
}

let d = new Dictionary();

d.newEntry("Apple", "A fruit that grows on trees");
d.newEntry("dfgn", "dnfgn");
console.log(d.look("Apple"));
console.log(d.look("dfgn"));
