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

    function up(task) {
        let counter = 0;
        task.forEach((val, ind) => {
            if (counter === capacity){
                return
            }
            if (val.length !== 0){
                result.push(ind);
                counter+=val.length;
                val.forEach(to => {

                })
            }
        })
        return result
    }

    function down(queues, task) {

    }

    console.log(up(task.up))

    result.push(0);
    return task
};

let queues = [
    [], // G
    [0, 3, 4], // 1
    [], // 2
    [], // 3
    [2], // 4
    [6], // 5
    [0], // 6
];
console.log(theLift(queues, 5))