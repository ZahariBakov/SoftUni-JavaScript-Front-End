function solve(string) {
    string = string.toLowerCase();
    let searchedWords = string.split(' ');
    let words = {};

    for (const word of searchedWords) {
        if (!words[word]) {
            words[word] = 0;
        }

        words[word] ++;
    }
    
    let oddWords = [];

    for (const key in words) {
        if (words[key] % 2 !== 0) {
            oddWords.push(key);
        }
    }

    console.log(oddWords.join(' '));
}

solve(
    'Java C# Php PHP Java PhP 3 C# 3 1 5 C#'
);