const axios = require('axios');

class CurrentWeatherService {
  async get(currentWeather) {
    // console.log(currentWeather);
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${currentWeather.q}&lang=${currentWeather.lang}&units=${currentWeather.units}&appid=ae57b0f49f54af7c3ce53a9c9308949f`)
      // console.log(resp);
    return resp.data;
  }
}

module.exports = new CurrentWeatherService()