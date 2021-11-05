const axios = require('axios');
require('dotenv').config();
const CovidRepository = require('../repositories/covid.repository')

class CovidService {
  async getCases(covidData) {
    try {
      let resp = []
      let respDB = await CovidRepository.getRecoveredCasesSum(covidData.country)
      resp.push(respDB._doc)
      return resp
    } catch (error) {
      console.log(error);
    }
  }

  async getTodayCases(covidData) {
    try {
      let resp = []
      let respDB = await CovidRepository.getCases(covidData.country)
      resp.push(respDB._doc)
      return resp
    } catch (error) {
      console.log(error);
    }
  }

  async getActiveCasesSum(covidData) {
    try {
      let resp = []
      let respDB = await CovidRepository.getActiveCasesSum(covidData.country)
      resp.push(respDB._doc)
      return resp
    } catch (error) {
      console.log(error);
    }
  }

  async getActiveCasesDay(covidData) {
    try {
      let resp = []
      let respDB = await CovidRepository.getActiveCasesDay(covidData.country)
      resp.push(respDB._doc)
      return resp
    } catch (error) {
      console.log(error);
    }
  }

  async getTotalDeaths(covidData) {
    try {
      let resp = []
      let respDB = await CovidRepository.getDeaths(covidData.country)
      resp.push(respDB._doc)
      return resp
    } catch (error) {
      console.log(error);
    }
  }

  async getRecoveredCasesSum(covidData) {
    try {
      let resp = []
      let respDB = await CovidRepository.getRecoveredCasesSum(covidData.country)
      resp.push(respDB._doc)
      return resp
    } catch (error) {
      console.log(error);
    }
  }

  async getRecoveredCasesDay(covidData) {
    try {
      let resp = []
      let respDB = await CovidRepository.getRecoveredCasesDay(covidData.country)
      resp.push(respDB._doc)
      return resp
    } catch (error) {
      console.log(error);
    }
  }

  async getTestSum(covidData) {
    try {
      let resp = []
      let respDB = await CovidRepository.getTestSum(covidData.country)
      resp.push(respDB._doc)
      return resp
    } catch (error) {
      console.log(error);
    }
  }

  async getTestDay(covidData) {
    try {
      let resp = []
      let respDB = await CovidRepository.getTestDay(covidData.country)
      resp.push(respDB._doc)
      return resp
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new CovidService()