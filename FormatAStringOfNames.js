function list(names) {

    if (!names.length)
        return '';
    if (names.length === 1)
        return names[0].name;
    let result = [];
    for (let i = 0; i < names.length-1; i++) {
        result.push(names[i].name)
    }
    result = result.join(', ');
    result = result +' & ' + names[names.length-1].name;
    return result
}

console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]));