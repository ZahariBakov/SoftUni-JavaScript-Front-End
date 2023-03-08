function charactersInRange(firstChar, secondChar) {
    let result = [];

    let firstCharCode = firstChar.charCodeAt();
    let secondCharCode = secondChar.charCodeAt();

    let startingIndex = Math.min(firstCharCode, secondCharCode);
    let finalIndex = Math.max(firstCharCode, secondCharCode);


    for (let i = startingIndex + 1; i < finalIndex; i++) {
        result.push(String.fromCharCode(i)); 
    }

    console.log(result.join(' '));
}

charactersInRange('a', 'd');
charactersInRange('#', ':');
charactersInRange('C', "#");
