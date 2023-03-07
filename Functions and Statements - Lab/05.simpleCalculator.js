function simpleCalculator(firstNum, secondNum, operator) {
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const divide = (a, b) => a / b;
    const multiply = (a, b) => a * b;
    const operationMap = {
        add: add,
        subtract: subtract,
        divide: divide,
        multiply: multiply
    }

    console.log(operationMap[operator](firstNum, secondNum));    
}

simpleCalculator(5, 5, 'multiply');
simpleCalculator(40, 8, 'divide');
simpleCalculator(12, 19, 'add');
simpleCalculator(50, 13, 'subtract');
