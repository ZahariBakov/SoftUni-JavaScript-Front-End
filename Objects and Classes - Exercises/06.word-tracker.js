function wordsTracker(input) {
    let searchedWords = input.shift().split(' ');
    let words = {};

    for (const word of searchedWords) {
        let filteredInput = input.filter((w) => w === word);
        words[word] = filteredInput.length;
    }

    let sortedWords = Object.entries(words)
        .sort((a, b) => b[1] - a[1]);

    for (const [word, count] of sortedWords) {
        console.log(`${word} - ${count}`)
    }
}

// wordsTracker(
//     [
//     'this sentence', 
//     'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
//     ]        
// );

wordsTracker(
    [
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']        
);