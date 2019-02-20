function findShort(s){
    let arr = s.split(' ');
    let leng = arr[0].length;
    for (let i = 1; i<arr.length; i++){
        if (arr[i].length<leng){
            leng = arr[i].length
        }
    }
    return leng
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));