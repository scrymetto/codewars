class God{

    human: 'man'

    static create(){
        return this.human
    }
}

let humans = God.create();
console.log(humans)