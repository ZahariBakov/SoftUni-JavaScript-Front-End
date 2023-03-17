function subtract() {
    let result = document.getElementById('result');
    let firstNum = Number(document.querySelector('#firstNumber').value);
    let secondNum = Number(document.querySelector('#secondNumber').value);

    let subtract = firstNum - secondNum;

    result.textContent = subtract;
}