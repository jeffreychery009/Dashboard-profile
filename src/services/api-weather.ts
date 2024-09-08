import axios from "axios";

// Defining WeatherPropsData interface

// Exporting the interface to be used in the HomePage component
export interface WeatherPropsData {
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
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${lat},${lon}&days=1`;

  // Using axios to fetch data from the API, then returning the data as a response, and catching any errors

  return axios
    .get(url)
    .then((res) => {
      const data = res.data;
      const weatherData: WeatherPropsData = {
        city: data.location.name,
        temperature: Math.floor(data.current.temp_f),
        tempHighF: Math.floor(data.forecast.forecastday[0].day.maxtemp_f),
        tempLowF: Math.floor(data.forecast.forecastday[0].day.mintemp_f),
        condition: data.current.condition.text,
      };
      return weatherData;
    })
    .catch((error) => {
      console.error("Error fetching weather data: ", error);
      return error;
    });
};
// Defining a function for displaying multiple common cities weather

export const getWeather = async (): Promise<WeatherPropsData[]> => {
  const cities = [
    "New York",
    "Toronto",
    "Atlanta",
    "Dallas",
    "Vancouver",
    "Miami",
    "Los Angeles",
    "Chicago",
    "London",
    "Paris",
    "Berlin",
    "Tokyo",
  ];
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  // Create an array of Promises for each city's weather data
  const weatherPromises = cities.map(async (city) => {
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1`;

    try {
      const res = await axios.get(url);
      const data = res.data;
      const weatherData: WeatherPropsData = {
        city: data.location.name,
        temperature: Math.floor(data.current.temp_f),
        tempHighF: Math.floor(data.forecast.forecastday[0].day.maxtemp_f),
        tempLowF: Math.floor(data.forecast.forecastday[0].day.mintemp_f),
        condition: data.current.condition.text,
      };
      return weatherData;
    } catch (error) {
      console.log(`Error fetching weather data for ${city}:`, error);
      return null; // Return null if there's an error for a specific city
    }
  });

  // Wait for all Promises to resolve
  const weatherDataArray = await Promise.all(weatherPromises);

  // Filter out any null values (i.e., cities that failed to fetch)
  return weatherDataArray.filter((data) => data !== null) as WeatherPropsData[];
};
