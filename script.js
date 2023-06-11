const cityInput = document.getElementById("input");
const btn = document.getElementById("submit");
const weatherInfo = document.getElementById("weather_info");

function addOptions(parameter, value, parentElement) {
    const element = document.createElement("p");
    element.textContent = `${parameter}: ${value}`;
    parentElement.appendChild(element);
    return element;
  }

function addImage(srcContent, parentElement) {
    const element = document.createElement('img');
    element.src = srcContent;
    parentElement.appendChild(element);
    return element;
}

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

            addOptions("Температура: ", temperature, weatherInfo);
            addOptions("Тиск: ", pressure, weatherInfo);
            addOptions("Опис: ", description, weatherInfo);
            addOptions("Вологість: ", humidity, weatherInfo);
            addOptions("Швидкість вітру: ", speed, weatherInfo);
            addOptions("Напрям(у градусах): ", deg, weatherInfo);
            
            addImage(iconUrl, weatherInfo);

            cityInput.value = '';

        })
})