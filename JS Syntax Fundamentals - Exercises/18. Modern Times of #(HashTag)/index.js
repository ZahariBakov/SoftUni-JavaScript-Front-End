function solve(text) {
    let textArr = text.split(' ');

    for (let word of textArr) {
        if (/^#[a-zA-Z]+$/.test(word)) {
            console.log(word.slice(1));
        }
    }
}

solve(
    'Nowadays everyone uses # to tag a #spe5cial word in #socialMedia'
);

solve(
    'Nowadays everyone uses # to tag a #special word in #socialMedia The symbol # is known #variously in English-speaking #regions as the #number sign'
);