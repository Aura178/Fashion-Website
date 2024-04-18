document.addEventListener('DOMContentLoaded', function () {
    const getWeatherBtn = document.getElementById('getWeatherBtn');
    const cityInput = document.getElementById('cityInput');
    const weatherInfo = document.getElementById('weatherInfo');
    const forecastInfo = document.getElementById('forecastInfo');
    const animatedElement = document.getElementById('animatedElement');

    getWeatherBtn.addEventListener('click', function () {
        const city = cityInput.value;

        if (!city) {
            alert('Please enter a city.');
            return;
        }

        getWeather(city);
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            getWeather(cityInput.value);
        }
    });

    animateElement(animatedElement);
});

function getWeather(city) {
    const apiKey = 'ffc0cf702a259e3da11df788268667d3';
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
            displayForecast(data);
            weatherInfo.classList.add('highlight');
        })
        .catch(error => {
            alert(`Error: ${error.message}`);
        });
}

function displayWeather(data) {
    const temperature = data.list[0].main.temp;
    const description = data.list[0].weather[0].description;
    const iconCode = data.list[0].weather[0].icon;

    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `<p>Temperature: ${temperature} °C</p>
                             <p>Description: ${description}</p>
                             <img src="${getWeatherIcon(iconCode)}" alt="Weather Icon">`;

    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Additional information';
    weatherInfo.appendChild(newParagraph);
}

function displayForecast(data) {
    const forecastInfo = document.getElementById('forecastInfo');
    forecastInfo.innerHTML = '';

    for (let i = 0; i < data.list.length; i += 8) {
        const forecastData = data.list[i];
        const date = new Date(forecastData.dt * 1000);
        const day = date.toLocaleDateString('en-US', { weekday: 'short' });
        const temperature = forecastData.main.temp;
        const description = forecastData.weather[0].description;

        const forecastItem = document.createElement('div');
        forecastItem.classList.add('forecast-item');
        forecastItem.innerHTML = `<p class="day">${day}</p>
                                  <p class="temperature" id="temperature-${i}">${temperature} °C</p>
                                  <img class="weather-icon" src="${getWeatherIcon(forecastData.weather[0].icon)}" alt="Weather Icon">`;

        forecastInfo.appendChild(forecastItem);

        changeTemperatureColor(temperature, i);
    }
}

function changeTemperatureColor(temperature, index) {
    const temperatureElement = document.getElementById(`temperature-${index}`);
    
    if (temperature > 25) {
        temperatureElement.style.color = 'red';
    } else if (temperature < 10) {
        temperatureElement.style.color = 'blue';
    } else {
        temperatureElement.style.color = 'black';
    }
}

function animateElement(element) {
    let position = 0;

    function move() {
        position += 5;

        if (element) {
            element.style.left = position + 'px';

            if (position < 200) {
                requestAnimationFrame(move);
            }
        }
    }

    move();
}

function getWeatherIcon(iconCode) {
    return `https://openweathermap.org/img/w/${iconCode}.png`;
}


