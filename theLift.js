let theLift = function (queues, capacity) {
    console.log(capacity)
    let currentQueues = queues.concat();
    let allTask = {};
    allTask.up = [];
    allTask.down = [];
    let result = [];
    let flag = true;

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
        let curResult = [];
        let count = 0;
        let out = [];
        let newTask = [];
        for (let i = task.length - 1; i > 0; i--) {
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
        allTask.down = newTask;
        return Array.from(new Set(curResult))
    }

    function isEmpty(obj) {
        let up = obj.up.some(el => {
            if (el.length > 0) return true
        });
        let down = obj.down.some(el => {
            if (el.length > 0) return true
        });
        if (!up && !down) {
            flag = false
        }
        return flag
    }

    do {
        let cur = up(allTask.up);
        cur.forEach(el => {
            if (el !== result[result.length-1]){
                result.push(el)
            }
        });
        let cur1 = down((allTask.down));
        cur1.forEach(el => {
            if (el !== result[result.length-1]){
                result.push(el)
            }
        });
    } while (isEmpty(allTask));

    if (result[0] !== 0) {
        result.unshift(0)
    }
    if (result.length !== 1) {
        result.push(0)
    }
    return result
};

let queues = [
    [], // G
    [], // 1
    [4, 4, 4, 4], // 2
    [], // 3
    [2, 2, 2, 2], // 4
    [], // 5
    [], // 6
];
console.log(theLift(queues, 2))