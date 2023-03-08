function factorialDivision(firstNum, secondNum) {
    function factorial(number) {
        if (number == 1) {
            return number;
        }

        return number * (factorial(number - 1));
    }

    firstNum = factorial(firstNum);
    secondNum = factorial(secondNum);

    console.log((firstNum / secondNum).toFixed(2));
}

factorialDivision(5, 2);
factorialDivision(6, 2);

