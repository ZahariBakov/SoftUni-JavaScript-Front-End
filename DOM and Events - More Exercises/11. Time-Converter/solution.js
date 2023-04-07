function attachEventsListeners() {
    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');

    const daysConvertBtn = document.getElementById('daysBtn')
    const hoursConvertBtn = document.getElementById('hoursBtn');
    const minutesConvertBtn = document.getElementById('minutesBtn');
    const secondsConvertBtn = document.getElementById('secondsBtn');

    daysConvertBtn.addEventListener('click', convertHandler);
    hoursConvertBtn.addEventListener('click', convertHandler);
    minutesConvertBtn.addEventListener('click', convertHandler);
    secondsConvertBtn.addEventListener('click', convertHandler);

    let currentDays = 0;

    function convertHandler() {
        if(days.value) {
            currentDays = Number(days.value);
            counting(currentDays);
            
        }

        else if(hours.value) {
            currentDays = Number(hours.value) / 24; 
            counting(currentDays);
        }

        else  if(minutes.value) {
            currentDays = Number(minutes.value) / 1440;
            counting(currentDays);
        }

        else {
            currentDays = Number(seconds.value) / 86400;
            counting(currentDays);
        }
    }

    function counting(currentDays) {
        days.value = currentDays;
        hours.value = currentDays * 24;
        minutes.value = currentDays * 1440;
        seconds.value = currentDays * 86400;
    }

}