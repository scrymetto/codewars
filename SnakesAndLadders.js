function SnakesLadders() {
    this.players = {
        1: 0,
        2: 0
    };
    this.next = 0;
}

SnakesLadders.prototype.play = function (die1, die2) {

    for (let key in this.players){
        if (this.players[key] === 100) return 'Game over!'
    }

    let player = this.next ? this.next : 1;

    function isInMap(map, x) {
        return (map.has(x)) ? map.get(x) : false
    }

    function findNext(obj, useKey) {
        for (let key in obj) {
            if (key !== useKey + '') return key
        }
    }

    let sum = die1 + die2 + this.players[player];
    let result;
    let ladders = new Map([
        [2, 38],
        [7, 14],
        [8, 31],
        [15, 26],
        [21, 42],
        [28, 84],
        [36, 44],
        [51, 67],
        [71, 91],
        [78, 98],
        [87, 94]]);
    let snakes = new Map([
        [16, 6],
        [46, 25],
        [49, 11],
        [62, 19],
        [64, 60],
        [74, 53],
        [89, 68],
        [92, 88],
        [95, 75],
        [99, 80]]);
    if (sum > 100) {
        sum = 100 - (sum - 100)
    }
    if (!isInMap(ladders, sum)) {
        result = isInMap(snakes, sum) ? isInMap(snakes, sum) : sum
    } else {
        result = isInMap(ladders, sum)
    }
    this.players[player] = result;
    this.next = die1 === die2 ? player : findNext(this.players, player);

    if (result === 100) {
        return `Player ${player} Wins!`
    } else {
        return `Player ${player} is on square ${result}`
    }
};
let game = new SnakesLadders();
console.log(game.play(1, 1));
console.log(game.play(1, 4));
console.log(game.play(1, 0));