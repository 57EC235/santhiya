const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key from OpenWeatherMap

// Function to get weather data
async function getWeather() {
    const city = document.getElementById('city').value;
    if (city === '') {
        alert('Please enter a city!');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === '404') {
            alert('City not found!');
            return;
        }

        const weatherInfo = `
            <div class="weather-detail">City: ${data.name}</div>
            <div class="weather-detail">Temperature: ${data.main.temp}°C</div>
            <div class="weather-detail">Humidity: ${data.main.humidity}%</div>
            <div class="weather-detail">Weather: ${data.weather[0].description}</div>
        `;
        document.getElementById('weather-info').innerHTML = weatherInfo;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Failed to get weather data. Please try again.');
    }
}
