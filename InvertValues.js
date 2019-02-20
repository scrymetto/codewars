function invert(array) {
    for (let i = 0; i < array.length; i++){
        array[i] = 0-array[i]
    }
    return array;
}