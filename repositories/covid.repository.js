const CovidCasesToday = require('../models/covid-cases-sum.model');
const CovidDeath = require('../models/covid-deaths-sum.model')
const CovidActiveCaseSum = require('../models/covid-active-cases-sum.model')
const CovidActiveCasesDay = require('../models/covid-active-cases-day.model')
const CovidRecoveredSum = require('../models/covid-recovered-cases-sum.model')
const CovidRecoveredDay = require('../models/covid-recovered-cases-day.model')
const CovidTestSum = require('../models/covid-test-sum.model')
const CovidTestDay = require('../models/covid-test-day.model')
var moment = require('moment');

class CovidRepository {

  getTodayCases = async (country) => {
    try {
      const today = moment(new Date()).subtract(2,'d').format("DD-MM-YYYY");
      const resp = await CovidCasesToday.findOne({ dateQuery: today, country: country });
      return resp._doc;
    } catch (error) {
      console.log(error);
    }
  }

  getActiveCases = async(country) => {
    try {
      let today = moment(new Date()).subtract(2,'d').format("DD-MM-YYYY")
      let resp = CovidActiveCaseSum.findOne({ dateQuery: today, country: country });
      return resp;
    } catch (error) {
      console.log(error);
    }
  }

  getRecoveredCasesSum = async(country) => {
    try {
      let today = moment(new Date()).subtract(2,'d').format("DD-MM-YYYY")
      let resp = await CovidRecoveredSum.findOne({ dateQuery: today, country: country });
      return resp._doc;
    } catch (error) {
      console.log(error);
    }
  }

  getTodayDeaths = async (country) => {
    try {
      let today = moment(new Date()).subtract(2,'d').format("DD-MM-YYYY")
      let resp = await CovidDeath.findOne({ dateQuery: today, country: country });
      return resp._doc;
    } catch (error) {
      console.log(error);
    }
  }

  // getActiveCasesDay = async(country) => {
  //   try {
  //     let today = moment(new Date()).subtract(2, 'd').format("DD-MM-YYYY")
  //     let resp = CovidDeath.findOne({ dateQuery: today, country: country });
  //     return resp;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // getRecoveredCasesDay = async(country) => {
  //   try {
  //     let today = moment(new Date()).format("DD-MM-YYYY")
  //     let resp = CovidRecoveredDay.findOne({ dateQuery: today, country: country });
  //     return resp;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // getTestDay = async(country) => {
  //   try {
  //     let today = moment(new Date()).format("DD-MM-YYYY")
  //     let resp = CovidTestDay.findOne({ dateQuery: today, country: country });
  //     return resp;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
}

module.exports = new CovidRepository()