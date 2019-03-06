class God {

    constructor () {}
    static create(){
        let adam = new Man('Adam');
        let eve = new Woman('Eve');
        let humans = [];
        humans.push(adam, eve);
        return humans
    }
}

class Human  {

    constructor (name) {
        this.name = name
    }
}

class Man extends Human {

    constructor (name) {
        super(name);
    }
}

class Woman extends Human {

    constructor (name) {
        super(name);
    }
}

let humans = God.create();

console.log(humans);
console.log(humans[0] instanceof Woman);