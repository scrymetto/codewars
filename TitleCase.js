function titleCase(title, minorWords) {
    if (!title) {
        return ''
    }

    function changeWord(word) {
        let endWord;
        if (word.length > 1) {
            endWord = word.toLowerCase()
                .split('');
            endWord[0] = endWord[0].toUpperCase();
            return endWord.join('')
        } else {
            endWord = word.toUpperCase();
            return endWord
        }
    }

    let result = [];
    let arrOfTittle = title.toLowerCase()
        .split(' ');
    result.push(changeWord(arrOfTittle[0]));
    if (!minorWords) {
        minorWords = '';
        for (let i = 1; i < arrOfTittle.length; i++) {
            result.push(changeWord(arrOfTittle[i]))
        }
    } else {
        let arrMinor = minorWords.toLowerCase().split(' ');
        for (let i = 1; i < arrOfTittle.length; i++) {

            if (arrMinor.indexOf(arrOfTittle[i]) >= 0) {
                result.push(arrOfTittle[i])
            } else {
                result.push(changeWord(arrOfTittle[i]))
            }
        }
    }

    return result.join(' ')
}

console.log(titleCase('a clash of KINGS', 'a an the of'));