function attachGradientEvents() {
    const divResult = document.getElementById('result');
    const gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', calc);
    gradient.addEventListener('mouseleave', () => divResult.textContent = '');
    
    function calc(event) {
        let position = Math.floor((event.offsetX / (event.target.clientWidth - 1)) * 100);
        divResult.textContent = `${position}%`;    
    }
}