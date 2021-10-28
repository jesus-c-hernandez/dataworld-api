const Joi = require('joi')

const globalKey = {
  countries: Joi.string().required(),
  languages: Joi.string().required()
}
class NewsValidator {
  getHealth() {
    return Joi.object().keys(globalKey).options({ allowUnknown: true, stripUnknown: true })
  }

  getScience() {
    return Joi.object().keys(globalKey).options({ allowUnknown: true, stripUnknown: true })
  }

  getTechnology() {
    return Joi.object().keys(globalKey).options({ allowUnknown: true, stripUnknown: true })
  }

}

module.exports = new NewsValidator()