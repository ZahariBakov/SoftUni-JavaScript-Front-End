function wordsUppercase(text) {
    let regExp = /\b\w+\b/g;
    let output = [];
    let newText = text.matchAll(regExp);

    for (const word of newText) {
        output.push(word[0].toUpperCase());
    }

    console.log(output.join(', '));
}

wordsUppercase('Hi, how are you?');
wordsUppercase('hello');