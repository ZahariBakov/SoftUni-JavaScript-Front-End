function sameNumbers(num) {
    let firstNum = num % 10
    let sum = firstNum
    num = Math.trunc(num / 10)
    let sameNumber = true

    while (num > 0) {
        let currentNum = num % 10;
        num = Math.trunc(num / 10)
        sum += currentNum

        if (currentNum !== firstNum) {
            sameNumber = false
        }
    }

    console.log(sameNumber);
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);
