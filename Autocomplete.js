'use strict';

function autocomplete(input, dictionary) {
    if (!dictionary[0]) return [];
    let Alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '-', ' '];
    let AlphabetInput = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let inputSort = input.split('')
        .map(letter => {
            if (~AlphabetInput.indexOf(letter.toLowerCase())) {
                return letter
            }
        })
        .join('');
    let arr = dictionary.map(word => {
        let letters = word.split('');
        let wordLet = [];
        letters.forEach((letter) => {
            if (~Alphabet.indexOf(letter.toLowerCase())) {
                wordLet.push(letter)
            }
        });
        if (wordLet.join('')
            .toLowerCase()
            //.indexOf(input, 0) === 0)
            .startsWith(inputSort)) {
            return wordLet.join('')
        } else return ''
    });
    let sortArr = [];
    arr.forEach((value) => {
        if (value && value !== ' ') {
            sortArr.push(value)
        }
    });
    if (sortArr.length > 5) {
        sortArr.length = 5
    }
    return sortArr
}

console.log(autocomplete('ab*&1cd', ['ab*&1cd', '$%^', 'x-ray', 'X-Men', 'laxa', 'Xavier', 'xenon']));