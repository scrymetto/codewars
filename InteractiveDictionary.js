class Dictionary {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }

    newEntry(key, value) {
        this.key = key;
        this.value = value;
    }

    look(key) {
        if (this.key = key)
        return this.value
    }
}

let d = new Dictionary();

d.newEntry("Apple", "A fruit that grows on trees");
console.log(d.look("Apple"));
console.log(d.look("Banana"));
