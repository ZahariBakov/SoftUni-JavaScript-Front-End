function solve() {
    const number = document.getElementById('input');
    const selectToMenu = document.getElementById('selectMenuTo');
    const result = document.getElementById('result');
    const convertBtn = document.querySelector('button');

    convertBtn.addEventListener('click', convertHandler);
    
    let currentOption = document.querySelector('#selectMenuTo > option');
    currentOption.value = 'binary';
    currentOption.text = 'Binary';

    const option = document.createElement('option');
    option.value = 'hexadecimal';
    option.text = 'Hexadecimal';
    selectToMenu.appendChild(option);

    function convertHandler() {
        if(selectToMenu.value === 'binary') {
            result.value =  Number(number.value).toString(2);
        }

        else {
            result.value = Number(number.value).toString(16).toUpperCase();
        }
    }
}