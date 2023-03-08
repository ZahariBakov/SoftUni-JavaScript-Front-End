function oddAndEvenSum(number) {
    let oddSum = 0;
    let evenSum = 0;

    while (number > 0) {
        let currentNum = number % 10;
        number = Math.trunc(number / 10);
        if (currentNum % 2 === 0) {
            evenSum += currentNum
        }

        else {
            oddSum += currentNum
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);