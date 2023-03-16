function focused() {
    const inputs = document.querySelectorAll('input[type="text"]');

    for (let i = 0; i < inputs.length; i++) {
        const currentInput = inputs[i];

        currentInput.addEventListener('focus', (event) => {
            const div = event.target.parentNode;
            div.classList.add('focused');
        });

        currentInput.addEventListener('blur', (event) => {
            const div = event.target.parentNode;
            div.classList.remove('focused');
        });
    }
}