function addItem() {
    const select = document.getElementById('menu');
    const inputText = document.getElementById('newItemText');
    const inputValue = document.getElementById('newItemValue');

    const inputTextValue = inputText.value;
    const inputValueValue = inputValue.value;

    const option = document.createElement('option');
    option.textContent = inputTextValue;
    option.value = inputValueValue;
    select.appendChild(option);

    inputText.value = '';
    inputValue.value = '';
}