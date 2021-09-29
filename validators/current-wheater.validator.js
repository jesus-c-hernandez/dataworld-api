const Joi = require('joi')

class CurrentWeatherValidator {
  get() {
    return Joi.object().keys({
      q: Joi.string().required(),
      lang: Joi.string().optional().default('es'),
      units: Joi.string().optional().default('metric')
    }).options({ allowUnknown: true, stripUnknown: true })
  }
}

module.exports = new CurrentWeatherValidator()