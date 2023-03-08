function perfectNumber(number) {
    // First decision:
    // let sum = 1;
    // for (let i = 2; i < number; i++) {
    //     if (number % i == 0) {
    //         sum += i;
    //     }
    // }

    // Second decision:
    let divisors = [];

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            divisors.push(i);
        }
    }

    let sum = divisors.reduce((a, b) => {return a + b}, 1)

    if (sum == number) {
        console.log('We have a perfect number!');
    }

    else {
        console.log('It\'s not so perfect.');
    }
}

perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);
