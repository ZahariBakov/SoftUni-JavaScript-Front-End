function arrayRotation(numbers, rotation) {
    rotation %= numbers.length;

    for (let index = 0; index < rotation; index++) {
        let firstNum = numbers.shift();
        numbers.push(firstNum);
        
    }

    console.log(numbers.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);
