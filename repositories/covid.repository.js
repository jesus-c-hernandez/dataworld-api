const CovidCase = require('../models/covid-cases.model')
const CovidDeath = require('../models/covid-deaths.model')
const CovidActiveCaseSum = require('../models/covid-active-cases-sum.model')
const CovidActiveCasesDay = require('../models/covid-active-cases-day.model')
const CovidRecoveredSum = require('../models/covid-recovered-cases-sum.model')
const CovidRecoveredDay = require('../models/covid-recovered-cases-day.model')
const CovidTestSum = require('../models/covid-test-sum.model')
const CovidTestDay = require('../models/covid-test-day.model')
var moment = require('moment');

class CovidRepository {
  getActiveCasesSum = async(country) => {
    try {
      let today = moment(new Date(2021, 9, 27)).format("DD-MM-YYYY")
      let resp = CovidActiveCaseSum.findOne({ dateQuery: today, country: country });
      return resp;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new CovidRepository()