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
        return result
    }

    let result = calcVote(curVoters);
    console.log(result);

    let winner;
    let max = 0;
    let looser;
    let min = 0;
    for (let key in result) {
        if (result[key] > max) {
            winner = key;
            max = result[key]
        } else {
            if (result[key] <= min) {
                looser = key;
                min = result[key]
            }
        }
    }

    if (max < (curVoters.length / 2)) {
        curVoters = curVoters.map(arr => {
            let ind = arr.indexOf(looser);
            arr.splice(ind, 1);
            return arr
        })
    }
    console.log(curVoters);


    result = calcVote(curVoters)
    console.log(result);


    return winner
}

console.log(runoff([["c", "b", "a", "e", "d"],
    ["e", "a", "c", "d", "b"],
    ["c", "a", "b", "d", "e"],
    ["d", "c", "a", "e", "b"],
    ["a", "b", "c", "d", "e"]]));