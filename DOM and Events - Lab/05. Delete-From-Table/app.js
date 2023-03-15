function deleteByEmail() {
    const input = document.querySelector('input[name=email]');
    let emailValue = input.value;
    const evenTds = Array.from(document.querySelectorAll('td:nth-child(even)'));
    const result = document.getElementById('result');

    let foundElement = evenTds.find((td) => td.textContent === emailValue);
    if (foundElement) {
        foundElement.parentElement.remove();
        result.textContent = 'Deleted.';
    }

    else {
        result.textContent = 'Not found.';
    }
}