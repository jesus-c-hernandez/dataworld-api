const Joi = require('joi')

class NewsValidator {
  get() {
    return Joi.object().keys({
      countries: Joi.string().required(),
      languages: Joi.string().required(),
    }).options({ allowUnknown: true, stripUnknown: true })
  }

}

module.exports = new NewsValidator()