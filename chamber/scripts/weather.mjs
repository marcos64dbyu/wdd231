const weatherDescriptions = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Depositing rime fog",
  51: "Light drizzle",
  53: "Moderate drizzle",
  55: "Dense drizzle",
  56: "Light freezing drizzle",
  57: "Dense freezing drizzle",
  61: "Slight rain",
  63: "Moderate rain",
  65: "Heavy rain",
  66: "Light freezing rain",
  67: "Heavy freezing rain",
  71: "Slight snow fall",
  73: "Moderate snow fall",
  75: "Heavy snow fall",
  77: "Snow grains",
  80: "Slight rain showers",
  81: "Moderate rain showers",
  82: "Violent rain showers",
  85: "Slight snow showers",
  86: "Heavy snow showers",
  95: "Thunderstorm",
  96: "Thunderstorm with slight hail",
  99: "Thunderstorm with heavy hail"
};

export async function getWeather() {
  try {
    const url =
      "https://api.open-meteo.com/v1/forecast?latitude=-0.2299&longitude=-78.5249&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto";

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    if (!data.current_weather || !data.daily) return null;

    // Current weather
    const current = {
      temperature: data.current_weather.temperature,
      windspeed: data.current_weather.windspeed,
      description:
        weatherDescriptions[data.current_weather.weathercode] ||
        "Unknown condition"
    };

    // 3-Day Forecast
    const forecast = data.daily.time.map((date, i) => ({
      date,
      min: data.daily.temperature_2m_min[i],
      max: data.daily.temperature_2m_max[i],
      description:
        weatherDescriptions[data.daily.weathercode[i]] || "Unknown condition"
    }));

    return { current, forecast };
  } catch (error) {
    console.error("Error fetching weather:", error);
    return null;
  }
}
