function runoff(voters) {

    let curVoters = voters;

    function calcVote(arr) {
        let result = {};
        arr[0].forEach(value => {
            result[value] = 0;
        });
        for (let i = 0; i < arr.length; i++) {
            let winner1 = arr[i][0];
            result[winner1] ? result[winner1]++ : result[winner1] = 1;
        }
        console.log(result)
        return result
    }

    function findWinner(obj) {
        let winner;
        let max = 0;
        let looser = [];
        let min = curVoters.length / 2;
        for (let key in obj) {
            let sign = obj[key];
            if (sign > max) {
                winner = key;
                max = sign
            } else if (sign <= min) {
                let arr = looser[sign];
                if (!looser[sign]){
                    looser[sign] = [];
                }
                looser[sign].push(key);
                min = sign
            }
        }
        console.log(looser)
        looser = looser.map(el =>{

        })

        if (max < (curVoters.length / 2)) {
            curVoters = curVoters.map(arr => {
                let ind = arr.indexOf(looser);
                arr.splice(ind, 1);
                return arr
            });
            console.log(curVoters)
            return [false, curVoters]
        } else return [true, winner]
    }

    let result = findWinner(calcVote(curVoters));
    while (!result[0]) {
        result = findWinner(calcVote(curVoters))
    }
    return result[1]
}

console.log(runoff([["a", "c", "d", "e", "b"],
    ["e", "b", "d", "c", "a"],
    ["d", "e", "c", "a", "b"],
    ["c", "e", "d", "b", "a"],
    ["b", "e", "a", "c", "d"]]));