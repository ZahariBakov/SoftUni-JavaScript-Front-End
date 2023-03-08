function loadingBar(number) {
    if (number == 100) {
        console.log('100% Complete!')
        console.log(`[${'%'.repeat(10)}]`);
    }

    else {
        let percentSymbol = number / 10;
        let dotsSymbol = 10 - percentSymbol;
        console.log(`${number}% [${'%'.repeat(percentSymbol)}${'.'.repeat(dotsSymbol)}]`);
        console.log('Still loading...')
    }
}

loadingBar(30);
loadingBar(50);
loadingBar(100);
