import axios from "axios";
import { config } from "../config";

const { API_BASE_URL, API_KEY } = config

const fetchWeatherData = async (city: string) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/data/2.5/weather`, {
        params: {
          q: city,
          // units: imperial,
          appid: API_KEY,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      throw error;
    }
  };
  
  export {fetchWeatherData};
