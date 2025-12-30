// 🔐 OpenWeather API Key (provided by you)
const apiKey = "bb451c3d9b2d0f8117d6eac1ef1935fc";

// 📍 Talegaon Dabhade coordinates
const lat = 18.72;
const lon = 73.68;

async function fetchWeather() {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
        );

        const data = await response.json();

        if (data.cod === 200) {
            // 🌡 Temperature
            document.getElementById("temp").innerText =
                `${Math.round(data.main.temp)}°C`;

            // 📝 Description
            document.getElementById("description").innerText =
                data.weather[0].description;

            // 💧 Humidity
            document.getElementById("humidity").innerText =
                data.main.humidity;

            // 🌬 Wind (m/s → km/h)
            document.getElementById("wind").innerText =
                (data.wind.speed * 3.6).toFixed(1);

            // 🖼 Weather Icon
            const icon = data.weather[0].icon;
            document.getElementById("weather-icon").src =
                `https://openweathermap.org/img/wn/${icon}@2x.png`;

            // 🌈 Dynamic Background
            setWeatherBackground(data.weather[0].main);
        } else {
            document.getElementById("description").innerText =
                "Weather data not found";
        }
    } catch (error) {
        console.error("Weather fetch error:", error);
        document.getElementById("description").innerText =
            "Unable to fetch weather data";
    }
}

// 🎨 Background changer
function setWeatherBackground(weather) {
    document.body.className = "";

    switch (weather.toLowerCase()) {
        case "clear":
            document.body.classList.add("clear");
            break;
        case "clouds":
            document.body.classList.add("clouds");
            break;
        case "rain":
        case "drizzle":
            document.body.classList.add("rain");
            break;
        case "snow":
            document.body.classList.add("snow");
            break;
        case "mist":
        case "fog":
        case "haze":
            document.body.classList.add("mist");
            break;
        default:
            document.body.classList.add("clouds");
    }
}

// 🚀 Call function
fetchWeather();
