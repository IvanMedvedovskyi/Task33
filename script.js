const cityInput = document.getElementById("input");
const btn = document.getElementById("submit");
const weatherInfo = document.getElementById("weather_info");

btn.addEventListener("click", function(){
    const cityValue = cityInput.value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&APPID=5d066958a60d315387d9492393935c19`;

    fetch(url)
        .then(function(response){
            if(response.ok) {
                return response.json();
            } else{
                throw new Error("Error!");
            }
        })
        .then(function(data) {
            weatherInfo.innerHTML = '';

            const temperature = data.main.temp;
            const pressure = data.main.pressure;
            const description = data.weather[0].description;
            const humidity = data.main.humidity;
            const speed = data.wind.speed;
            const deg = data.wind.deg;
            const iconId = data.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/w/${iconId}.png`;

            const temperatureSpan = document.createElement('p');
            temperatureSpan.textContent = "Температура: " + temperature;
            weatherInfo.appendChild(temperatureSpan);

            const pressureSpan = document.createElement('p');
            pressureSpan.textContent = "Тиск: " + pressure;
            weatherInfo.appendChild(pressureSpan);

            const descriptionSpan = document.createElement('p');
            descriptionSpan.textContent = "Опис: " + description;
            weatherInfo.appendChild(descriptionSpan);

            const humiditySpan = document.createElement('p');
            humiditySpan.textContent = "Вологість: " + humidity;
            weatherInfo.appendChild(humiditySpan);

            const speedSpan = document.createElement('p');
            speedSpan.textContent = "Швидкість вітру: " + speed;
            weatherInfo.appendChild(speedSpan);

            const degSpan = document.createElement('p');
            degSpan.textContent = "Напрям(у градусах): " + deg;
            weatherInfo.appendChild(degSpan);

            const iconElement = document.createElement('img');
            iconElement.src = iconUrl;
            weatherInfo.appendChild(iconElement);

            cityInput.value = '';

        })
})