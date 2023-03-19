function extract(content) {
    // First decision:
    const input = document.getElementById('content').textContent;
    const regexp = (/(?<=\()[^\)]+(?=\))/g);
    let searchedWords = input.match(regexp);

    return searchedWords.join('; ');

    // Second decision:
    // const input = document.getElementById('content').textContent;
    // const regexp = /\(([^)]+)\)/g;
    // let searchedWords = [];

    // const array = [...input.matchAll(regexp)];

    // for (let i = 0; i < array.length; i++) {
    //     let currentWord = (array[i][0]);
    //     currentWord = currentWord.slice(1, -1);

    //     searchedWords.push(currentWord);
    // }

    // return searchedWords.join('; ');
}