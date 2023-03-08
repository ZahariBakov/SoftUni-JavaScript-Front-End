function palindromeIntegers(numbers) {
    const isPalindrome = (num) => Number([...num.toString()].reverse().join('')) === num;

    // First decision:
    // numbers.forEach((num) => {console.log(isPalindrome(num))});

    // Second decision:
    let booleans = numbers.map(isPalindrome);
    console.log(booleans.join('\n'));
}

palindromeIntegers([123,323,421,121]);
palindromeIntegers([32,2,232,1010]);
