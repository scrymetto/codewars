'use strict';

class Sudoku {

    constructor(data) {
        this.data = data
    }

    isRowsValid() {
        for (let i = 0; i < this.data.length; i++) {
            let row = [];
            row.length = this.data[i].length;
            row.fill(null);
            for (let j = 0; j < this.data[i].length; j++) {
                let a = this.data[i][j];
                if (Number.isInteger(a) && !row[a - 1]) {
                    row[a - 1] = a;
                } else return false
            }
            if (row[0]!==1) return false
        }
        return true
    };

    isColumnValid() {
        for (let i = 0; i < this.data.length; i++) {
            let column = [];
            column.length = this.data[i].length;
            column.fill(null);
            for (let j = 0; j < this.data[i].length; j++) {
                let a = this.data[j][i];
                if (!column[a - 1]) {
                    column[a - 1] = a;
                } else return false
            }
        }
        return true
    };

    isNValid() {
        if (Number.isInteger(Math.sqrt(this.data.length)) && Number.isInteger(Math.sqrt(this.data[0].length))) {
            let valid = this.data[0].length;
            this.data.forEach(el => {
                if (el.length === valid) {
                    valid = el.length
                } else valid = false
            });
            if (valid) return true;
        } else return false
    }

    isSquareValid() {
        let side = Math.sqrt(this.data.length);
        let currentSquare = [1, 1];
        for (let m = 0; m < this.data.length; m++) {
            let square = [].fill(null);
            for (let i = side * (currentSquare[0] - 1); i < side * (currentSquare[0]); i++) {
                for (let j = side * (currentSquare[1] - 1); j < side * (currentSquare[1]); j++) {
                    let a = this.data[i][j];
                    if (!square[a - 1]) {
                        square[a - 1] = a;
                    } else {
                        return false
                    }
                }
            }
            if (currentSquare[0] < side) {
                currentSquare[0]++;
            } else if (currentSquare[1] < side) {
                currentSquare[1]++;
                currentSquare[0] = 1;
            } else return true
        }
    }

    isValid() {
        return (this.isNValid() && this.isRowsValid() && this.isColumnValid() && this.isSquareValid())
    }
}

let
    su = new Sudoku([
        [7, 8, 4, 1, 5, 9, 3, 2, 6],
        [5, 3, 9, 6, 7, 2, 8, 4, 1],
        [6, 1, 2, 4, 3, 8, 7, 5, 9],

        [9, 2, 8, 7, 1, 5, 4, 6, 3],
        [3, 5, 7, 8, 4, 6, 1, 9, 2],
        [4, 6, 1, 9, 2, 3, 5, 8, 7],

        [8, 7, 6, 3, 9, 4, 2, 1, 5],
        [2, 4, 3, 5, 6, 1, 9, 7, 8],
        [1, 9, 5, 2, 8, 7, 6, 3, 4]
    ]);
console.log(su.isValid())