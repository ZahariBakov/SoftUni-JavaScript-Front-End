function encodeAndDecodeMessages() {
    const buttons = Array.from(document.querySelectorAll('button'));
    const encodeBtn = buttons[0];
    const decodeBtn = buttons[1];

    const textAreas = Array.from(document.querySelectorAll('textarea'));
    

    encodeBtn.addEventListener('click', encodeHandler);
    decodeBtn.addEventListener('click', decodeHandler);

    function encodeHandler() {
        let currentText = textAreas[0].value;
        let encodeText = '';

        for (let i = 0; i < currentText.length; i++) {
            let charCode = currentText.charCodeAt(i);
            encodeText += String.fromCharCode(charCode + 1);
        }

       textAreas[0].value = '';
       textAreas[1].value = encodeText;
    }

    function decodeHandler() {
        let currentText = textAreas[1].value;
        let decodeText = '';

        for (let i = 0; i < currentText.length; i++) {
            let charCode = currentText.charCodeAt(i);
            decodeText += String.fromCharCode(charCode - 1);
        }

        textAreas[1].value = decodeText;
    }
}