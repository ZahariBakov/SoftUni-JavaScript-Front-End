function revealWords(words, text) {
    let wordsArr = words.split(', ');
    let textArr = text.split(' ');

    for (let word of wordsArr) {
        let currentWordLength = word.length;

        for (let i = 0; i < textArr.length; i++) {
            if (textArr[i].length === currentWordLength &&
                textArr[i].includes('*'.repeat(currentWordLength))) {
                    textArr[i] = word
                }
            
        }
    }

    console.log(textArr.join(' '))
}

revealWords(
    'great',
    'softuni is ***** place for learning new programming languages'
);

revealWords(
    'great, learning',
    'softuni is ***** place for ******** new programming languages'
);