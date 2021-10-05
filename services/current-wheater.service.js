const axios = require('axios');
require('dotenv').config();

class CurrentWeatherService {
  async get(currentWeather) {
    // console.log(currentWeather);
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${currentWeather.lat}&lon=${currentWeather.lon}&lang=${currentWeather.lang}&units=${currentWeather.units}&mode=${currentWeather.mode}&appid=${process.env.API_KEY_OP_1}`)
      // console.log(resp);
    return resp.data;
  }
}

module.exports = new CurrentWeatherService()