export default async function getInfo(city){
    try{
        const response = await fetch('https://api.weatherapi.com/v1/current.json?key=481d157be2154cbc8ba13708242505&q=' + city, {mode: 'cors'})
        const data = await response.json()
        const values =  [
            data.location.name,
            data.current.condition.icon,
            data.current.condition.text,
            data.current.temp_f,
            data.current.feelslike_f,
            data.current.humidity,
            data.current.wind_mph
        ]

        addToDOM(values)
    } catch(error){
        alert('location not found')
        console.log(error)
    }

    
}

function addToDOM(values){
    const mainContainer = document.getElementById('main-container')
    mainContainer.innerHTML = ''

    const weatherContainer = document.createElement('div');
    weatherContainer.id = 'weather-container';

    const cityContainer = document.createElement('div');
    cityContainer.id = 'city-container';
    cityContainer.textContent = values[0];
    weatherContainer.appendChild(cityContainer);

    const rightContainer = document.createElement('div');
    rightContainer.id = 'right';

    const conditionsImg = document.createElement('img');
    conditionsImg.id = 'conditions-img';
    conditionsImg.src = values[1];
    rightContainer.appendChild(conditionsImg);

    const conditionsText = document.createElement('div');
    conditionsText.id = 'conditions';
    conditionsText.textContent = values[2];
    rightContainer.appendChild(conditionsText);

    weatherContainer.appendChild(rightContainer);

    const tempContainer = document.createElement('div');
    tempContainer.id = 'temp-container';
    tempContainer.textContent = values[3] + ' F';
    weatherContainer.appendChild(tempContainer);

    const feelsContainer = document.createElement('div');
    feelsContainer.id = 'feels-container';
    feelsContainer.className = 'tiny-containers';
    feelsContainer.textContent = 'Feels like: ' + values[4] + ' F';
    weatherContainer.appendChild(feelsContainer);

    const humidContainer = document.createElement('div');
    humidContainer.id = 'humid-container';
    humidContainer.className = 'tiny-containers';
    humidContainer.textContent = 'Humidity: ' + values[5] + '%';
    weatherContainer.appendChild(humidContainer);

    const windContainer = document.createElement('div');
    windContainer.id = 'wind-container';
    windContainer.className = 'tiny-containers';
    windContainer.textContent = 'Wind: ' + values[6] + ' mph';
    weatherContainer.appendChild(windContainer);

    mainContainer.appendChild(weatherContainer);
}