const maze = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1], //"N", "N", "N", "N", "N", "E", "E", "S", "S", "E", "E", "N", "N", "E"
    [1, 0, 0, 0, 0, 0, 3, 1, 0],
    [1, 0, 1, 0, 1, 0, 0, 0, 1],
    [0, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 1, 0],
    [1, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 2, 1, 0, 1, 0, 1, 1, 0],
    [1, 0, 1, 0, 1, 0, 1, 1, 0],
    [0, 0, 1, 0, 0, 0, 1, 0, 1]];


function mazeRunner(maze, directions) {
    let indexStartVer = 0;
    let indexStartHor = 0;
    for (let i = 0; i < maze.length; i++) {
        maze.forEach(function (value, index) {
            if (value.indexOf(2) > 0) {
                indexStartVer = index
            }
        });
    }
    maze[indexStartVer].forEach(function (value, index) {
        if (value === 2) {
            indexStartHor = index;
        }
    });
    let indexNowVer = indexStartVer;
    let indexNowHor = indexStartHor;
    for (let i = 0; i < directions.length; i++) {
        switch (directions[i]) {
            case 'N':
                indexNowVer--;
                break;
            case 'S':
                indexNowVer++;
                break;
            case 'E':
                indexNowHor++;
                break;
            case 'W':
                indexNowHor--;
                break;
            case '':
                continue;
        }
        if (indexNowVer < 0 || indexNowHor < 0 ||
            indexNowVer >= maze.length || indexNowHor >= maze[indexNowVer].length) {
            return 'Dead'
        }
        switch (maze[indexNowVer][indexNowHor] + '') {
            case '0':
                if (i === (directions.length - 1) || directions[directions.length - 1] === '') {
                    return 'Lost'
                } else continue;
            case '1':
                return 'Dead';
            case '3':
                return 'Finish';
        }
    }
    return 'Lost'
}

console.log(mazeRunner(maze, ['', '', '']));