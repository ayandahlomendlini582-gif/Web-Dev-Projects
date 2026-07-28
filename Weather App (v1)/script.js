const apiKey = '2117a37d4a094507a2e175231260504';

const cityInput = document.getElementById('cityInput');

cityInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        getWeather(cityInput.value);
    }
});

async function getWeather(city) {
    try {
        const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&aqi=no`;
        console.log("Calling URL:", url);

        const response = await fetch(url);

        if (!response.ok) throw new Error("City not found");

        const data = await response.json();
        updateUI(data);
    } catch (error) {
        console.error("Error:", error);
        document.getElementById('CityName').innerText = "City not found!";
    }
}
function UpdateForecast(data){
    const container = document.getElementById('forecastContainer');
    container.innerHTML = '';

    data.forecast.forecastday.forEach((day, index) => {
        const date = day.data;
        const condition = day.day.condition.text;
        const icon = "https:" + day.day.condition.icon;

        container.innerHTML += `
            <div id="days${index + 1}" class="forecast-day">
                <p class="forecast-date">${date}</p>
                <img src="${icon}" alt="${condition}">
                <p class="forecast-condition">${condition}</p>
                <hr>
            </div>
        `;
    });

}

function updateUI(data) {
    document.getElementById('CityName').innerText = data.location.name;
    document.getElementById('cityForecast').innerText = `Current Temp: ${data.current.temp_c}°C`;

    document.getElementById('temperature').innerText = `${data.current.temp_c}°C`;
    document.getElementById('windSpd').innerText = `Wind Speed: ${data.current.wind_kph} km/h`;

    const iconUrl = "https:" + data.current.condition.icon;
    document.querySelector('.top-report img').src = iconUrl;

    UpdateForecast(data);
}
