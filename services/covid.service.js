const axios = require('axios');
require('dotenv').config();
// const FilterPropertiesService = require('./filter-properties.service.js')


class CovidService {
  async getCases(covidData) {
    // console.log(currentWeather);
    let config = {
      headers: {
        'Authorization': 'Bearer ' + process.env.API_KEY_COVID
      }
    }
    const resp = await axios.get(`https://gateway.nubentos.com/nubentos.com/ncovapi/2.0.0/cases?country=${covidData.country}`, config)
      // console.log(resp);
    return resp.data;
  }

  async getTodayCases(covidData) {
    // console.log(currentWeather);
    let config = {
      headers: {
        'Authorization': 'Bearer ' + process.env.API_KEY_COVID
      }
    }
    const resp = await axios.get(`https://gateway.nubentos.com/nubentos.com/ncovapi/2.0.0/todayCases?country=${covidData.country}`, config)
      // console.log(resp);
    return resp.data;
  }

  async getActiveCases(covidData) {
    // console.log(currentWeather);
    let config = {
      headers: {
        'Authorization': 'Bearer ' + process.env.API_KEY_COVID
      }
    }
    const resp = await axios.get(`https://gateway.nubentos.com/nubentos.com/ncovapi/2.0.0/active?country=${covidData.country}`, config)
      // console.log(resp);
    return resp.data;
  }
}

module.exports = new CovidService()