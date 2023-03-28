function attachEvents() {
    const textArea = document.getElementById('messages');
    const sendBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');
    const authorInput = document.querySelector('input[name="author"]');
    const msgInput = document.querySelector('input[name="content"]');

    const BASE_URL = 'http://localhost:3030/jsonstore/messenger';

    sendBtn.addEventListener('click', sendMsg);
    refreshBtn.addEventListener('click', getMsg);

    async function sendMsg() {  
        let message = {
            author: authorInput.value,
            content: msgInput.value
        };

        try {
            await fetch(BASE_URL, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(message)
            });

            authorInput.value = '';
            msgInput.value = '';
        }

        catch(err) {
            console.error(err);
        }
    }

    async function getMsg() {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        let currentMsg = [];
        
        Object.values(data).forEach((msg) => {
            currentMsg.push(`${msg.author}: ${msg.content}`);
        })

        console.log(currentMsg);

        textArea.textContent = currentMsg.join('\n');

        authorInput.value = '';
        msgInput.value = '';
    }
}

attachEvents();