import React, { useEffect, useState } from "react";
import {
  getWeather,
  getWeatherData,
  WeatherPropsData,
} from "../services/api-weather";

const Weather = () => {
  const [weather, setWeather] = useState<WeatherPropsData[] | null>(null);
  const [locationWeather, setLocationWeather] =
    useState<WeatherPropsData | null>(null);
  const [error, setError] = useState<string | null>("");

  useEffect(() => {
    getWeather()
      .then((data) => {
        setWeather(data);
      })
      .catch(() => {
        setError("Failed to fetch weather data");
      });
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      getWeatherData(latitude, longitude)
        .then((data) => {
          setLocationWeather(data);
        })
        .catch(() => {
          setError("Failed to fetch weather data");
        });
    });
  });

  if (error) return <div>{error}</div>;

  return (
    <>
      <div>
        <div className="bg-white p-5 m-5 shadow-md rounded-lg max-w-80 dark:bg-gray-900 ">
          <h1 className="text-xl font-medium dark:text-gray-100">
            View the Weather
          </h1>
          <p className="text-gray-500 text-sm dark:text-gray-400">
            View the weather in multiple different cities
          </p>
        </div>
      </div>
      <div className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4 dark:bg-gray-900">
        <span className="text-xl font-medium text-gray-400 dark:text-gray-100">
          Your Location
        </span>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-400">
          {locationWeather?.city}
        </h2>
        <div className="text-4xl font-bold text-blue-500">
          {locationWeather?.temperature}°F
        </div>
        <div className="text-lg text-gray-500 dark:text-gray-100">
          {locationWeather?.condition}
        </div>
        <div className="flex justify-between w-full text-sm text-gray-600 dark:text-gray-100">
          <span>High: {locationWeather?.tempHighF}°F</span>
          <span>Low: {locationWeather?.tempLowF}°F</span>
        </div>
      </div>
      <div className="mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {weather?.map((city) => (
            <div
              key={city.city}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4 dark:bg-gray-900"
            >
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                {city.city}
              </h2>
              <div className="text-4xl font-bold text-blue-500">
                {city.temperature}°F
              </div>
              <div className="text-lg text-gray-500 dark:text-gray-100">
                {city.condition}
              </div>
              <div className="flex justify-between w-full text-sm text-gray-600 dark:text-gray-100">
                <span>High: {city.tempHighF}°F</span>
                <span>Low: {city.tempLowF}°F</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Weather;
