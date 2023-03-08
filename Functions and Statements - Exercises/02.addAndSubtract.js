function addAndSubtract(firstNum, secondNum, thirdNum) {
    // First decision:
    // let sumResult = firstNum + secondNum;
    // let subtractResult = sumResult - thirdNum;
    // console.log(subtractResult);

    // Second decision:
    let sum = (a, b) => a + b;
    let subtract = (sum, num) => sum - num;

    console.log(subtract(sum(firstNum, secondNum), thirdNum));
}

addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);
