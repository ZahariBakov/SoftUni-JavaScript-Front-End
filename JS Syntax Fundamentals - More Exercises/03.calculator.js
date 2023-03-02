function calculator(firstNum, operator, secondNum) {
    // First Decision:
    let operation = {
        '+': firstNum + secondNum,
        '-': firstNum - secondNum,
        '/': firstNum / secondNum,
        '*': firstNum * secondNum
    }
    console.log(operation[operator].toFixed(2))

    // Second decision:
    // console.log(eval(`${firstNum}${operator}${secondNum}`).toFixed(2))
}

calculator(5, '+', 10);
calculator(25.5, '-', 3);
