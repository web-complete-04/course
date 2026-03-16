import { useEffect, useState } from "react";
import type { WeatherData } from "./types";

const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=Brasov,RO&units=metric&appid=06671faf1a6a7a89b34cfe87f9ff1099";

export function Weather() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json() as Promise<WeatherData>)
      .then((data) => setWeatherData(data));
  }, []);

  if(!weatherData) {
    return <strong>Loading weather ...</strong>
  }

  return (
    <>
      <h1>Weather in {weatherData.name}, {weatherData.sys.country} is {weatherData.weather[0].description}!</h1>
      <img src={`https://openweathermap.org/payload/api/media/file/${weatherData.weather[0].icon}.png`} alt={weatherData.weather[0].description} />
      <p>The current temperature is: <strong>{weatherData.main.temp.toFixed(1)}&deg; C</strong></p>
    </>
  );
}
