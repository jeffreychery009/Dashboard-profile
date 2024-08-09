import { useEffect, useState } from "react";
import caretleft from "../assets/caret-left.svg";
import { getWeather, WeatherPropsData } from "../services/api-weather";
import { Link } from "react-router-dom";

const WeatherPage = () => {
  const [weather, setWeather] = useState<WeatherPropsData[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getWeather()
      .then((res) => {
        console.log(weather);

        setWeather(res);
      })
      .catch((error) => {
        console.log("Failed to fetch weather", error);
        setError(error);
      });
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <>
      <div className="relative flex items-center justify-between mb-[60px]">
        <Link to="/">
          <img src={caretleft} alt="" />
        </Link>
        <h2 className="text-sm font-semibold absolute left-1/2 transform -translate-x-1/2">
          Weather
        </h2>
      </div>

      {weather &&
        weather.slice(0, 5).map((res, index) => (
          <div key={index}>
            <div className="card-style mb-4">
              <div className="flex justify-between mb-3">
                <h3 className="text-sm font-medium">Weather</h3>
              </div>
              <div className="flex justify-between mb-3">
                <p className="font-medium">{res.city}</p>
                <p className="bg-blue-gradient bg-clip-text text-transparent text-md font-medium">
                  {res.temperature}°F
                </p>
              </div>
              <div className="flex justify-between">
                <p>{res.condition}</p>
                <div className="flex bg-blue-gradient bg-clip-text text-transparent">
                  <span className="mx-2 ">L: {res.tempLowF}°</span>{" "}
                  <span>H: {res.tempHighF}°</span>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default WeatherPage;
