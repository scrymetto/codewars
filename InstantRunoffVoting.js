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

    function findTie(obj) {
        let tie = false;
        let val = Object.values(obj);
        let first = val[0];
        for (let i = 1; i < val.length; i++) {
            if (val[i] !== first) {
                tie = false;
                break;
            } else {
                tie = true
            }
        }
        return tie
    }

    function findWinner(obj) {
        let tie = findTie(obj);
        if (tie) {
            return [true, 'undefined']
        } else {
            let winner;
            let max = 1;
            let looser = [];
            let min = curVoters.length / 2;
            for (let key in obj) {
                let sign = obj[key];
                if (sign > max) {
                    winner = key;
                    max = sign
                } else if (sign <= min) {
                    let arr = looser[sign];
                    if (!looser[sign]) {
                        looser[sign] = [];
                    }
                    looser[sign].push(key);
                    min = sign
                }
            }
            let loos;
            for (let i = 0; i < looser.length; i++) {
                if (looser[i]) {
                    loos = looser[i];
                    break
                }
            }

            if (max <= (curVoters.length / 2)) {
                loos.forEach(el => {
                    curVoters = curVoters.map(arr => {
                        let ind = arr.indexOf(el);
                        arr.splice(ind, 1);
                        return arr
                    })
                });
                console.log(curVoters)
                return [false, curVoters]
            } else return [true, winner]
        }
    }

    let result = findWinner(calcVote(curVoters));
    while (!result[0]) {
        result = findWinner(calcVote(curVoters))
    }
    return result[1]

}

console.log(runoff(
    [['Frank Underwood', 'Drake Luft', 'Gihren Zabi', 'Abelt Dessler', 'Reinhard von Musel'],
        ['Drake Luft', 'Frank Underwood', 'Reinhard von Musel', 'Gihren Zabi', 'Abelt Dessler'],
        ['Gihren Zabi', 'Abelt Dessler', 'Drake Luft', 'Reinhard von Musel', 'Frank Underwood'],
        ['Abelt Dessler', 'Gihren Zabi', 'Drake Luft', 'Frank Underwood', 'Reinhard von Musel'],
        ['Drake Luft', 'Reinhard von Musel', 'Frank Underwood', 'Abelt Dessler', 'Gihren Zabi'],
        ['Abelt Dessler', 'Frank Underwood', 'Drake Luft', 'Reinhard von Musel', 'Gihren Zabi']]));