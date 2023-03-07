// First Decision:
// function signCheck(firstNum, secondNum, thirdNum) {

//     let negativeNum = 0;

//     if (firstNum < 0) {
//         negativeNum ++;
//     }

//     if (secondNum < 0) {
//         negativeNum ++;
//     }

//     if (thirdNum < 0) {
//         negativeNum ++;
//     }

//     if (negativeNum % 2 != 0) {
//         console.log('Negative')
//     }

//     else {
//         console.log('Positive')
//     }
// }

// Second decision:
function signCheck(...numbers) {
    console.log(numbers
        .filter((num) => num < 0)
        .length % 2 === 0? 'Positive': 'Negative');
}

signCheck( 5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);
