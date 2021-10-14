const Joi = require('joi')

const globalKey = {
  country: Joi.string().required()
}

class CovidValidator {
  getCases() {
    return Joi.object().keys(globalKey).options({ allowUnknown: true, stripUnknown: true })
  }
  getTodayCases() {
    return Joi.object().keys(globalKey).options({ allowUnknown: true, stripUnknown: true })
  }
  getActiveCases() {
    return Joi.object().keys(globalKey).options({ allowUnknown: true, stripUnknown: true })
  }
  getTotalDeaths() {
    return Joi.object().keys(globalKey).options({ allowUnknown: true, stripUnknown: true })
  }
  getTodayDeaths() {
    return Joi.object().keys(globalKey).options({ allowUnknown: true, stripUnknown: true })
  }
  getRecoveredCases() {
    return Joi.object().keys(globalKey).options({ allowUnknown: true, stripUnknown: true })
  }
  getTestTotals() {
    return Joi.object().keys(globalKey).options({ allowUnknown: true, stripUnknown: true })
  }
}

module.exports = new CovidValidator()