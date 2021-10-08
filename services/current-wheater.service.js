const axios = require('axios');
require('dotenv').config();
const FilterPropertiesService = require('./filter-properties.service.js')

class CurrentWeatherService {
  async get(currentWeather) {
    // console.log(currentWeather);
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${currentWeather.lat}&lon=${currentWeather.lon}&lang=${currentWeather.lang}&units=${currentWeather.units}&mode=${currentWeather.mode}&appid=${process.env.API_KEY_OP_1}`)
      // console.log(resp);
    const filterData = FilterPropertiesService.filterCurrentWeatherJSON(resp.data)
    return filterData;
  }

  async getFuture(currentWeather) {
    // console.log(currentWeather);
    const resp = await axios.get(`https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${currentWeather.lat}&lon=${currentWeather.lon}&cnt=${currentWeather.cnt}&mode=${currentWeather.mode}&lang=${currentWeather.lang}&units=${currentWeather.units}&appid=${process.env.API_KEY_OP_1}`)
      // console.log(resp);
    //const filterData = FilterPropertiesService.filterCurrentWeatherJSON(resp.data)
    return resp.data;
  }
}

module.exports = new CurrentWeatherService()