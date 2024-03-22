// Function to fetch weather data from API
async function fetchWeather(city) {
    const apiKey = 'c718624aad85ddafddb028066be00ad9'; // Replace 'YOUR_API_KEY' with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Function to display weather information
function displayWeather(weatherData) {
    const weatherInfoDiv = document.getElementById('weather-info');
    weatherInfoDiv.innerHTML = '';

    const cityName = weatherData.name;
    const temperature = weatherData.main.temp;
    const description = weatherData.weather[0].description;

    const weatherInfo = document.createElement('div');
    weatherInfo.innerHTML = `<h2>${cityName}</h2>
                             <p>Temperature: ${temperature}°C</p>
                             <p>Description: ${description}</p>`;
    
    weatherInfoDiv.appendChild(weatherInfo);
}

// Function to handle form submission
document.getElementById('weather-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission

    const cityInput = document.getElementById('city');
    const city = cityInput.value.trim();

    if (city === '') return; // Exit if city name is empty

    const weatherData = await fetchWeather(city);
    displayWeather(weatherData);
});
