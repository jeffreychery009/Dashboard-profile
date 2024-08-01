import axios from "axios";

// Defining WeatherPropsData interface

interface WeatherPropsData {
  city: string;
  temperature: number;
  tempHighF: number;
  tempLowF: number;
  condition: string;
}

// Creating a function to fetch weather data from the API

// Using Longitude and Latitude to get the user's location

// Exporting the function to be used in the HomePage component

export const getWeatherData = async (
  lat: number,
  lon: number
): Promise<WeatherPropsData> => {
  const apiKey = "2e7e17f091f9429aafe72537243107";
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${lat},${lon}&days=1`;

  // Using axios to fetch data from the API, then returning the data as a response, and catching any errors

  return axios
    .get(url)
    .then((res) => {
      const data = res.data;
      const weatherData: WeatherPropsData = {
        city: data.location.name,
        temperature: data.current.temp_c,
        tempHighF: data.forecast.forecastday[0].day.maxtemp_f,
        tempLowF: data.forecast.forecastday[0].day.mintemp_f,
        condition: data.current.condition.text,
      };
      return weatherData;
    })
    .catch((error) => {
      console.error("Error fetching weather data: ", error);
      return error;
    });
};
