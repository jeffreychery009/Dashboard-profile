import { useEffect, useState } from "react";
import { WeatherPropsData, getWeatherData } from "../../services/api-weather";
import { Link } from "react-router-dom";

const WeatherCard = () => {
  const [weather, setWeather] = useState<WeatherPropsData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getWeatherData(latitude, longitude)
            .then((weatherData) => {
              console.log(weather);

              setWeather(weatherData);
            })
            .catch(() => {
              setError("Failed to fetch Weather");
            });
        },
        () => setError("Failed to get Location") // Remove the unused 'error' parameter
      );
    } else {
      setError("Geolocation is not supported in your browser");
    }
  }, []);

  if (error) return <div>{error}</div>;
  return (
    <>
      <div className="card-style">
        <Link to="/weather">
          <div className="flex justify-between mb-3">
            <h3 className="text-sm font-medium">Weather</h3>
            <h4 className="text-xs">My Location</h4>
          </div>
          <div className="flex justify-between mb-3">
            <p className="font-medium">{weather?.city}</p>
            <p className="bg-blue-gradient bg-clip-text text-transparent text-md font-medium">
              {weather?.temperature}°F
            </p>
          </div>
          <div className="flex justify-between">
            <p>{weather?.condition}</p>
            <div className="flex bg-blue-gradient bg-clip-text text-transparent">
              <span className="mx-2 ">L: {weather?.tempLowF}°</span>{" "}
              <span>H: {weather?.tempHighF}°</span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default WeatherCard;
