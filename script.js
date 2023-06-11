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

            const temperatureParagraph = document.createElement('p');
            temperatureParagraph.textContent = "Температура: " + temperature;
            weatherInfo.appendChild(temperatureParagraph);

            const pressureParagraph = document.createElement('p');
            pressureParagraph.textContent = "Тиск: " + pressure;
            weatherInfo.appendChild(pressureParagraph);

            const descriptionParagraph = document.createElement('p');
            descriptionParagraph.textContent = "Опис: " + description;
            weatherInfo.appendChild(descriptionParagraph);

            const humidityParagraph = document.createElement('p');
            humidityParagraph.textContent = "Вологість: " + humidity;
            weatherInfo.appendChild(humidityParagraph);

            const speedParagraph = document.createElement('p');
            speedParagraph.textContent = "Швидкість вітру: " + speed;
            weatherInfo.appendChild(speedParagraph);

            const degParagraph = document.createElement('p');
            degParagraph.textContent = "Напрям(у градусах): " + deg;
            weatherInfo.appendChild(degParagraph);

            const iconElement = document.createElement('img');
            iconElement.src = iconUrl;
            weatherInfo.appendChild(iconElement);

            cityInput.value = '';

        })
})