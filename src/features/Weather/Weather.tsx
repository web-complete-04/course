import { useEffect, useState } from "react";
import type { WeatherData } from "./types";

const apiKey = import.meta.env.VITE_OPEN_WEATHER_MAP_KEY;

const cityNameApiUrl =
  `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apiKey}`;

const geolocationApiUrl =
  `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric`;

export function Weather() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    async function getWeatherByLocation(geo: GeolocationPosition) {
      const data = await fetch(
        `${geolocationApiUrl}&lat=${geo.coords.latitude}&lon=${geo.coords.longitude}`,
      ).then((res) => res.json());

      setWeatherData(data);
    }

    navigator.geolocation.getCurrentPosition(
      getWeatherByLocation,
      console.warn,
    );
  }, []);

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target;

    const data = new FormData(form);
    const city = data.get('city');
    const country = data.get('country');
    
    // const jsonLikeObject = Object.fromEntries(data.entries());

    const fromServer = await fetch(`${cityNameApiUrl}&q=${city},${country}`).then((res) => res.json());
    setWeatherData(fromServer);
  }

  if (!weatherData) {
    return <strong>Loading weather ...</strong>;
  }

  return (
    <>
      <h1>
        Weather in {weatherData.name}, {weatherData.sys.country} is{" "}
        {weatherData.weather[0].description}!
      </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="city">City</label>
        <input type="text" name="city" id="city" placeholder="City" />

        <label htmlFor="country">Country</label>
        <select name="country" id="country">
          <option value="RO">Romania</option>
          <option value="DE">Germany</option>
          <option value="US">USA</option>
        </select>
        <button type="submit">Search</button>
      </form>
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
