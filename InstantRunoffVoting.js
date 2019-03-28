function runoff(voters) {

    let result = {};

    for (let i = 0; i < voters.length; i++) {
        let ballot = voters[i].reverse();
        ballot.forEach((value, index) => {
            result[value] ? result[value] += index : result[value] = 1;
        })
    }

    console.log(result)
    let winner;
    let max = 0;
    for (let key in result) {
        if (result[key] > max) {
            max = result[key];
            winner = key
        }
    }
    return winner
}

console.log(runoff([["c", "b", "a", "e", "d"],
    ["e", "a", "c", "d", "b"],
    ["c", "a", "b", "d", "e"],
    ["d", "c", "a", "e", "b"],
    ["a", "b", "c", "d", "e"]]));