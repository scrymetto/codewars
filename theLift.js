let theLift = function (queues, capacity) {
    let task = {};
    task.up = [];
    task.down = [];
    queues.forEach((val, ind)=>{
        if (val.length>0){

        }
    })
    return task
};

let queues = [
    [], // G
    [0, 3, 4], // 1
    [], // 2
    [], // 3
    [2], // 4
    [3], // 5
    [], // 6
];
console.log(theLift(queues, 5))