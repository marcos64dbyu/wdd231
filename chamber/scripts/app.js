import { getWeather } from "./weather.mjs";

async function displayWeather() {
  const container = document.getElementById("weatherContainer");

  const weather = await getWeather();

  if (!weather) {
    container.innerHTML = "<p>Failed to load weather data.</p>";
    return;
  }

  // Clima actual
  let html = `
    <h3>Now</h3>
    <p><strong>Temperature:</strong> ${weather.current.temperature} °C</p>
    <p><strong>Wind Speed:</strong> ${weather.current.windspeed} km/h</p>
    <p><strong>Condition:</strong> ${weather.current.description}</p>
    <h3>Next 3 Days</h3>
    <ul>
  `;

  // Solo mostrar 3 días del forecast
  weather.forecast.slice(0, 3).forEach(day => {
    html += `
      <li>
        <strong>${day.date}</strong> <br>
        <ul>
          <li><strong>Min: </strong>${day.min} °C</li>
          <li><strong>Max: </strong>${day.max} °C</li>
          <li><strong>Condition: </strong>${day.description}</li>
        </ul>
      </li>
    `;
  });

  html += "</ul>";

  container.innerHTML = html;
}

displayWeather();