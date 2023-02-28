function stringSubstring(word, text) {
    let wordLowerCase = word.toLowerCase();
    let textArr = text.split(' ');
    let isFind = false

    for (const el of textArr) {
        if (wordLowerCase === el.toLowerCase()) {
            console.log(word);
            isFind = true;
            break;
        }
    }

    if (isFind === false) {
        console.log(`${word} not found!`);
    }
}

stringSubstring(
    'javascript',
    'JavaScript is the best programming language'
);

stringSubstring(
    'python',
    'JavaScript is the best programming language'
);
