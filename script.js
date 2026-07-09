const API_KEY = "11a98c6b21394800951221711262505";
const BASE_URL = "https://api.weatherapi.com/v1/current.json";

const cityInput = document.getElementById("city");
const searchBtn = document.getElementById("searchBtn");
const weatherBox = document.getElementById("weather");

searchBtn.addEventListener("click", getWeather);

cityInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        getWeather();

    }

});

async function getWeather() {

    const city = cityInput.value.trim();

    if (!city) {

        showError("Please enter a city name.");

        return;

    }

    weatherBox.innerHTML = "<p>Loading...</p>";

    const url = `${BASE_URL}?key=${API_KEY}&q=${city}`;

    try {

        const response = await fetch(url);

        if (!response.ok) {

            throw new Error("Unable to fetch weather.");

        }

        const data = await response.json();

        if (data.error) {

            showError(data.error.message);

            return;

        }

        displayWeather(data);

    }

    catch (error) {

        showError(error.message);

    }

}

function displayWeather(data) {

    weatherBox.innerHTML = `

        <h2>${data.location.name}, ${data.location.country}</h2>

        <img src="https:${data.current.condition.icon}" alt="Weather Icon">

        <h3>${data.current.temp_c}°C</h3>

        <p><strong>${data.current.condition.text}</strong></p>

        <p>Humidity: ${data.current.humidity}%</p>

        <p>Wind: ${data.current.wind_kph} km/h</p>

        <p>Feels Like: ${data.current.feelslike_c}°C</p>

    `;

}

function showError(message) {

    weatherBox.innerHTML = `

        <h3>${message}</h3>

    `;

}