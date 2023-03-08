function charactersInRange(firstChar, secondChar) {
    let result = '';
    let firstCharCode = firstChar.charCodeAt();
    let secondCharCode = secondChar.charCodeAt();

    if (firstCharCode <= secondCharCode) {
        for (let i = firstCharCode + 1; i < secondCharCode; i++) {
            result += String.fromCharCode(i); 
            result += ' ';           
        }
    }

    else {
        for (let i = secondCharCode + 1; i < firstCharCode; i++) {
            result += String.fromCharCode(i); 
            result += ' ';           
        }
    }

    console.log(result)
}

charactersInRange('a', 'd');
charactersInRange('#', ':');
charactersInRange('C', "#");
