function smallestOfThreeNumbers(...numbers) {
    // First decision:
    // let smallestNum = numbers[0];

    // for (let i = 1; i < numbers.length; i++) {
    //     if (numbers[i] < smallestNum) {
    //         smallestNum = numbers[i];
    //     }
    // }

    // console.log(smallestNum)

    // Second decision:
    console.log(Math.min(...numbers))
}

smallestOfThreeNumbers(2, 5, 3);
smallestOfThreeNumbers(600, 342, 123);
smallestOfThreeNumbers(25, 21, 4);
smallestOfThreeNumbers(2, 2, 2);
