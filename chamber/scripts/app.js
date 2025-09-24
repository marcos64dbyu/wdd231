import { getWeather } from "./weather.mjs";

async function displayWeather() {
  const container = document.getElementById("weatherContainer");

  const weather = await getWeather();

  if (!weather) {
    container.innerHTML = "<p>Failed to load weather data.</p>";
    return;
  }

  container.innerHTML = `
    <p><strong>Temperature:</strong> ${weather.temperature} °C</p>
    <p><strong>Wind Speed:</strong> ${weather.windspeed} km/h</p>
    <p><strong>Condition:</strong> ${weather.description}</p>
  `;
}

displayWeather();
