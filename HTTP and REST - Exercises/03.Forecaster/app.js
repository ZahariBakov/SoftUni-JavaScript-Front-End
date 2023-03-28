function attachEvents() {
    const submitBtn = document.getElementById('submit');
    const cityInput = document.getElementById('location');
    const forecast = document.getElementById('forecast');
    const currentDiv = document.getElementById('current');
    const upcomingDiv = document.getElementById('upcoming');
    const BASE_URL = 'http://localhost:3030/jsonstore/forecaster/';

    const conditions = {
        'Sunny':        '&#x2600', // ☀
        'Partly sunny': '&#x26C5', // ⛅
        'Overcast':		'&#x2601', // ☁
        'Rain':			'&#x2614', // ☂
        'Degrees':		'&#176',   // °

    }

    submitBtn.addEventListener('click', getWeather);

    function getWeather() {
        // Get city code from data:
        fetch(`${BASE_URL}locations`)
            .then((res) => res.json())
            .then((cities) => {
                const cityIndex = cities.findIndex((city) => city.name === cityInput.value)

                if(cityIndex === -1) {
                    throw new Error();
                }

                let cityCode = cities[cityIndex].code

                // Create today's weather:
                fetch(`${BASE_URL}today/${cityCode}`)
                    .then((res) => res.json())
                    .then((data) => {
                        forecast.style.display = 'block';
                        // Create "forecasts" div:
                        const forecasts = document.createElement('div');
                        forecasts.className = 'forecasts';

                        // Create span with class name 'condition symbol':
                        const conditionSymbolSpan = document.createElement('span');
                        conditionSymbolSpan.className = 'condition symbol';
                        conditionSymbolSpan.innerHTML = conditions[data.forecast.condition];
                        forecasts.appendChild(conditionSymbolSpan);

                        // Create span with class name 'condition':
                        const conditionSpan = document.createElement('span');
                        conditionSpan.className = 'condition';
                        
                            // Create three span's with class name 'forecast-data':
                            const firstSpan = document.createElement('span');
                            firstSpan.className = 'forecast-data';
                            firstSpan.textContent = data.name;
                            conditionSpan.appendChild(firstSpan);

                            const secondSpan = document.createElement('span');
                            secondSpan.className = 'forecast-data';
                            secondSpan.innerHTML = `${data.forecast.low}&#176/${data.forecast.high}&#176`;
                            conditionSpan.appendChild(secondSpan);

                            const thirdSpan = document.createElement('span');
                            thirdSpan.className = 'forecast-data';
                            thirdSpan.textContent = data.forecast.condition;
                            conditionSpan.appendChild(thirdSpan);

                            // Add the three span's elements to HTML:
                            forecasts.appendChild(conditionSpan);
                            currentDiv.appendChild(forecasts);
                    });

                // Create upcoming's weather:
                fetch(`${BASE_URL}upcoming/${cityCode}`)
                    .then((res) => res.json())
                    .then((data) => {
                        // Create "forecast-info" div:
                        const forecastInfo = document.createElement('div');
                        forecastInfo.className = 'forecast-info';

                        // For every day:
                        Array.from(data.forecast).forEach((day) => {
                            // Create span with class name 'upcoming':
                            const upcomingSpan = document.createElement('span');
                            upcomingSpan.className = 'upcoming';

                            // Create span with class name 'symbol':
                            const symbolSpan = document.createElement('span');
                            symbolSpan.className = 'symbol';
                            symbolSpan.innerHTML = conditions[day.condition];
                            upcomingSpan.appendChild(symbolSpan);

                            // Create two span's with class name 'forecast-data':
                            const firstSpan = document.createElement('span');
                            firstSpan.className = 'forecast-data';
                            firstSpan.innerHTML = `${day.low}&#176/${day.high}&#176`;
                            upcomingSpan.appendChild(firstSpan);

                            const secondSpan = document.createElement('span');
                            secondSpan.className = 'forecast-data';
                            secondSpan.textContent = day.condition;
                            upcomingSpan.appendChild(secondSpan);

                            forecastInfo.appendChild(upcomingSpan);
                        });

                        upcomingDiv.append(forecastInfo);
                    })
            })
            .catch(() => (forecast.textContent = 'Error'));
    }
}   

attachEvents();
