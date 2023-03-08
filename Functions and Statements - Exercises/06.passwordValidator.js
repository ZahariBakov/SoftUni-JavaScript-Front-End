function passwordValidator(password) {
    const isValidLength = (password) => password.length >= 6 && password.length <= 10;
    const hasOnlyLettersAndDigits = (password) => /^[A-z0-9]+$/g.test(password);
    const hasAtLeastTwoDigits = (password) => [...password.matchAll(/\d/g)].length >= 2;

    let validPassword = true;

    if (!isValidLength(password)) {
        console.log('Password must be between 6 and 10 characters');
        validPassword = false;
    }

    if (!hasOnlyLettersAndDigits(password)) {
        console.log('Password must consist only of letters and digits');
        validPassword = false;
    }

    if (!hasAtLeastTwoDigits(password)) {
        console.log('Password must have at least 2 digits');
        validPassword = false;
    }

    if (validPassword) {
        console.log('Password is valid');
    }
}

passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');
