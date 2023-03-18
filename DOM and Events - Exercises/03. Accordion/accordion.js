function toggle() {
    let btn = document.querySelector('.button');
    let extra = document.querySelector('#extra');

    if(btn.textContent == 'More') {
        btn.textContent = 'Less';
        extra.style.display = 'block';
    } else {
        btn.textContent = 'More';
        extra.style.display = 'none';
    }
}