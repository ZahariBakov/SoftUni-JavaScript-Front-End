function colorize() {
    const table = document.querySelector('table').rows;

    for (let i = 1; i < table.length; i += 2) {
        table[i].style.backgroundColor = 'Teal';
    }
}