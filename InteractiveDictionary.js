class Dictionary {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }

    newEntry(key, value) {
        // your code
    }

    look(key) {
        // your code
    }
}

let d = new Dictionary();

d.newEntry("Apple", "A fruit that grows on trees");
console.log(d.look("Apple"));
console.log(d.look("Banana"));
