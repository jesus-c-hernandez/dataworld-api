const axios = require('axios');
require('dotenv').config();
const CovidRepository = require('../repositories/covid.repository')

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
    // try {
    //   let resp = await CovidRepository.getCasesDay(covidData.country)
    //   return resp
    // } catch (error) {
    //   console.log(error);
    // }
  }

  async getActiveCases(covidData) {
    try {
      let resp = []
      let respDB = await CovidRepository.getActiveCasesSum(covidData.country)
      resp.push(respDB._doc)
      return resp
    } catch (error) {
      console.log(error);
    }
  }

  async getTotalDeaths(covidData) {
    // console.log(currentWeather);
    let config = {
      headers: {
        'Authorization': 'Bearer ' + process.env.API_KEY_COVID
      }
    }
    const resp = await axios.get(`https://gateway.nubentos.com/nubentos.com/ncovapi/2.0.0/deaths?country=${covidData.country}`, config)
      // console.log(resp);
    return resp.data;
  }

  async getTodayDeaths(covidData) {
    // console.log(currentWeather);
    let config = {
      headers: {
        'Authorization': 'Bearer ' + process.env.API_KEY_COVID
      }
    }
    const resp = await axios.get(`https://gateway.nubentos.com/nubentos.com/ncovapi/2.0.0/todayDeaths?country=${covidData.country}`, config)
      // console.log(resp);
    return resp.data;
  }

  async getRecoveredCases(covidData) {
    // console.log(currentWeather);
    let config = {
      headers: {
        'Authorization': 'Bearer ' + process.env.API_KEY_COVID
      }
    }
    const resp = await axios.get(`https://gateway.nubentos.com/nubentos.com/ncovapi/2.0.0/recovered?country=${covidData.country}`, config)
      // console.log(resp);
    return resp.data;
  }

  async getTestTotals(covidData) {
    // console.log(currentWeather);
    let config = {
      headers: {
        'Authorization': 'Bearer ' + process.env.API_KEY_COVID
      }
    }
    const resp = await axios.get(`https://gateway.nubentos.com/nubentos.com/ncovapi/2.0.0/totalTests?country=${covidData.country}`, config)
      // console.log(resp);
    return resp.data;
  }
}

module.exports = new CovidService()