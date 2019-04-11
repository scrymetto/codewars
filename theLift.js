let theLift = function (queues, capacity) {

    let currentQueues = queues.concat();
    let allTask = {};
    allTask.up = [];
    allTask.down = [];
    let result = [];

    currentQueues.forEach((val, ind) => {
        allTask.down[ind] = [];
        allTask.up[ind] = [];
        if (val.length > 0) {
            val.forEach(to => {

                if (to < ind) {
                    allTask.down[ind].push(to);
                }
                if (to > ind) {
                    allTask.up[ind].push(to);
                }
            })
        }
    });
    console.log(allTask)

    function up(task) {
        let curResult = [];
        let count = 0;
        let out = [];
        let newTask = [];
        for (let i = 0; i < task.length; i++) {
            out.forEach(el => {
                if (el === i) {
                    curResult.push(i);
                    count--;
                }
            });

            if (task[i] && task[i].length > 0) {
                curResult.push(i);
                task[i].forEach(el => {
                    if (count < capacity) {
                        out.push(el);
                        count++
                    } else {
                        if (newTask[i]) {
                            newTask[i].push(el)
                        } else {
                            newTask[i] = [];
                            newTask[i].push(el)
                        }

                    }
                })
            }
        }
        allTask.up = newTask;
        return Array.from(new Set(curResult))
    }

    function down(task) {

    }

    let cur = up(allTask.up)
    result = result.concat(cur);
    if (result[0]!==0){
        result.unshift(0)
    }
    result.push(0);
    return result
};

let queues = [
    [], // G
    [], // 1
    [5, 5, 5], // 2
    [], // 3
    [], // 4
    [], // 5
    [], // 6
];
console.log(theLift(queues, 5))