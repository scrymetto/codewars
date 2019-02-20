function isIsogram(str) {
    if (str === '') {
        return true
    } else {
        let str2 = str.toLowerCase();
        for (let i = 0; i < str2.length; i++) {
            for (let j = i+1; j < str2.length; j++){
                if (str2[i] === str2[j]){
                    return false
                }
            }
        } return true
    }
}

console.log(isIsogram("Dermatoglyphics"));