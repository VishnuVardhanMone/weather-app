const apiKey = "**********";

async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const result = document.getElementById("result");

    if (city === '') {
        result.innerHTML = "Please enter a city name";
        return;
    }

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        result.innerHTML = `
            <h3>${data.name}</h3>
            <p>🌡️ Temperature: ${data.main.temp} °C</p>
            <p>☁️ Weather: ${data.weather[0].description}</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
        `;
    } catch (error) {
        result.innerHTML = "City not found ❌";
    }
}
