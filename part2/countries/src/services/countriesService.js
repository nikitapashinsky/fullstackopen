import axios from "axios";
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api";

const getAllCountries = async () => {
  const request = axios.get(`${baseUrl}/all`);
  return request.then((response) => response.data);
};

const getCountryByName = async (countryName) => {
  const request = axios.get(`${baseUrl}/name/${countryName}`);
  return request.then((response) => response.data);
};

const getWeather = async (latitude, longitude) => {
  const request = axios.get(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`,
  );
  return request.then((response) => response.data);
};

export default { getAllCountries, getCountryByName, getWeather };
