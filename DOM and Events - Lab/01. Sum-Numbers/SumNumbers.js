function calc() {
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const output = document.getElementById('sum');

    let firstNum = Number(num1.value);
    let secondNum = Number(num2.value);
    sum = firstNum + secondNum

    output.value = sum;
}
