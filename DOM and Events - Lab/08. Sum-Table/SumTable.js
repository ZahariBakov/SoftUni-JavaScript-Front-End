function sumTable() {
    let sum = document.getElementById('sum');
    let table = document.querySelectorAll('td');
    let result = 0;

    for (let i = 1; i < table.length - 1; i += 2) {
        result += parseFloat(table[i].innerText);     
    }

    sum.innerText = result.toFixed(2);
}