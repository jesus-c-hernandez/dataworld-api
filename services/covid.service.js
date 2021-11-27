const axios = require('axios');
require('dotenv').config();
const CovidRepository = require('../repositories/covid.repository')

const config = {
  headers: {
    'Authorization': 'Bearer ' + process.env.API_KEY_COVID
  }
}

class CovidService {
  async getCases({ country }) {
    try {
      const resp = await axios.get(`${process.env.COVID_DIR}/cases?country=${country}`, config)
      return resp.data[0]
    } catch (error) {
      console.log(error);
    }
  }

  async getTodayCases(covidData) {
    try {
      let respDB = await CovidRepository.getTodayCases(covidData.country)
      delete respDB._id
      return respDB
    } catch (error) {
      console.log(error);
    }
  }

  async getActiveCases(covidData) {
    try {
      let respDB = await CovidRepository.getActiveCases(covidData.country)
      delete respDB._id
      return respDB
    } catch (error) {
      console.log(error);
    }
  }

  async getRecoveredCasesSum(covidData) {
    try {
      let respDB = await CovidRepository.getRecoveredCasesSum(covidData.country)
      delete respDB._id
      return respDB
    } catch (error) {
      console.log(error);
    }
  }

  async getTodayDeaths (covidData) {
    try {
      let respDB = await CovidRepository.getTodayDeaths(covidData.country)
      delete respDB._id
      return respDB
    } catch (error) {
      console.log(error);
    }
  }

  async getTotalDeaths({ country }) {
    try {
      const resp = await axios.get(`${process.env.COVID_DIR}/deaths?country=${country}`, config)
      return resp.data[0]
    } catch (error) {
      console.log(error);
    }
  }

  async getTestSum({ country }) {
    try {
      const resp = await axios.get(`${process.env.COVID_DIR}/totalTests?country=${country}`, config)
      return resp.data[0]
    } catch (error) {
      console.log(error);
    }
  }

  // async getActiveCasesDay(covidData) {
  //   try {
  //     let resp = []
  //     let respDB = await CovidRepository.getActiveCasesDay(covidData.country)
  //     resp.push(respDB._doc)
  //     return resp
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // async getRecoveredCasesDay(covidData) {
  //   try {
  //     let resp = []
  //     let respDB = await CovidRepository.getRecoveredCasesDay(covidData.country)
  //     resp.push(respDB._doc)
  //     return resp
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }


  // async getTestDay(covidData) {
  //   try {
  //     let resp = []
  //     let respDB = await CovidRepository.getTestDay(covidData.country)
  //     resp.push(respDB._doc)
  //     return resp
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
}

module.exports = new CovidService()