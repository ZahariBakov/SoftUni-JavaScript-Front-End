function validate() {
    const emailInput = document.getElementById('email');
    emailInput.addEventListener('change', validator);

    function validator() {
        const valid = emailInput.value.match(/^[a-z]+\@[a-z]+\.[a-z]+$/g);

        if (valid) {
            emailInput.removeAttribute('class');
        }

        else {
            emailInput.setAttribute('class', 'error');
        }
    }
}
