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
  getActiveCasesSum() {
    return Joi.object().keys(globalKey).options({ allowUnknown: true, stripUnknown: true })
  }
  getActiveCasesDay() {
    return Joi.object().keys(globalKey).options({ allowUnknown: true, stripUnknown: true })
  }
  getTotalDeaths() {
    return Joi.object().keys(globalKey).options({ allowUnknown: true, stripUnknown: true })
  }
  getTodayDeaths() {
    return Joi.object().keys(globalKey).options({ allowUnknown: true, stripUnknown: true })
  }
  getRecoveredCasesSum() {
    return Joi.object().keys(globalKey).options({ allowUnknown: true, stripUnknown: true })
  }
  getRecoveredCasesDay() {
    return Joi.object().keys(globalKey).options({ allowUnknown: true, stripUnknown: true })
  }
  getTestSum() {
    return Joi.object().keys(globalKey).options({ allowUnknown: true, stripUnknown: true })
  }
  getTestDay() {
    return Joi.object().keys(globalKey).options({ allowUnknown: true, stripUnknown: true })
  }
}

module.exports = new CovidValidator()