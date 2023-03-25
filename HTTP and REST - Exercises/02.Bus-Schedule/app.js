function solve() {
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    const infoContainer = document.querySelector('#info > span')
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/schedule/';
    let nextStop = 'depot';
    let stopName = null;

    function depart() {
        departBtn.disabled = true;
        arriveBtn.disabled = false;
        fetch(`${BASE_URL}${nextStop}`)
            .then((res) => res.json())
            .then((nextStopInfo) => {
                const { name, next} = nextStopInfo;
                nextStop = next;
                stopName = name;
                infoContainer.textContent = `Next stop ${name}`;
            })
            .catch((err) => {
                infoContainer.textContent = 'Error';
                departBtn.disabled = true;
                arriveBtn.disabled = true;
            })
    }

    async function arrive() {
        departBtn.disabled = false;
        arriveBtn.disabled = true;
        infoContainer.textContent = `Arriving at ${stopName}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();