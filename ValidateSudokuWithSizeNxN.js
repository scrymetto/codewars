'use strict';

class Sudoku {

    constructor(data) {
        this.data = data
    }

    findRows() {
        return this.data;
    }

    findColumn() {
        let column = [];
        this.data.forEach((value, index) => {
            let arr = [];
            for (let i = 0; i < value.length; i++) {
                if (this.data[i][index]) {
                    arr.push(this.data[i][index])
                }
            }
            column.push(arr)
        });
        return column
    };

    isNValid() {
        if (Number.isInteger(Math.sqrt(this.data.length))) {
            let valid = this.data[0].length;
            this.data.forEach(el =>{
                if (el.length===valid){
                    valid = el.length
                } else valid = false
            });
            if (valid) valid = true;
            return valid;
        } else return false
    }

    finsSquare() {

    }

}

let su = new Sudoku([
    [1]
]);
console.log(su.isNValid())