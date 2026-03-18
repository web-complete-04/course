import { useEffect, useState } from "react";
import type { WeatherData } from "./types";

// const apiUrl =
//   "https://api.openweathermap.org/data/2.5/weather?q=Brasov,RO&units=metric&appid=06671faf1a6a7a89b34cfe87f9ff1099";

const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?appid=06671faf1a6a7a89b34cfe87f9ff1099&units=metric";

export function Weather() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    async function getWeatherByLocation(geo: GeolocationPosition) {
      const data = await fetch(
        `${apiUrl}&lat=${geo.coords.latitude}&lon=${geo.coords.longitude}`,
      ).then((res) => res.json());

      setWeatherData(data);
    }

    navigator.geolocation.getCurrentPosition(
      getWeatherByLocation,
      console.warn,
    );
  }, []);

  if (!weatherData) {
    return <strong>Loading weather ...</strong>;
  }

  return (
    <>
      <h1>
        Weather in {weatherData.name}, {weatherData.sys.country} is{" "}
        {weatherData.weather[0].description}!
      </h1>
      <img
        src={`https://openweathermap.org/payload/api/media/file/${weatherData.weather[0].icon}.png`}
        alt={weatherData.weather[0].description}
      />
      <p>
        The current temperature is:{" "}
        <strong>{weatherData.main.temp.toFixed(1)}&deg; C</strong>
      </p>
    </>
  );
}
