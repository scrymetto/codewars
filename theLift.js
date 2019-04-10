let theLift = function (queues, capacity) {

    let currentQueues = queues.concat();
    let task = {};
    task.up = [];
    task.down = [];
    let counter = 0;
    let result = [];
    result.push(0);

    currentQueues.forEach((val, ind) => {
        if (val.length > 0) {
            task.down[ind] = [];
            task.up[ind] = [];
            val.forEach(to => {

                if (to < ind) {
                    task.down[ind].push(to);
                }
                if (to > ind) {
                    task.up[ind].push(to);
                }
            })
        }
    });
console.log(task)
    function up(task) {
        for (let i = 0; i<task.length; i++){

        }
    }

    function down(task) {

    }

    let cur = up(task.up)
    result = result.concat(cur)
    result.push(0);
console.log(task)
    return result
};

let queues = [
    [], // G
    [0, 4, 3], // 1
    [3], // 2
    [6], // 3
    [2,5], // 4
    [6], // 5
    [0], // 6
];
console.log(theLift(queues, 5))