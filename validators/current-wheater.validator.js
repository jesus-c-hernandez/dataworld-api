const Joi = require('joi')

class CurrentWeatherValidator {
  get() {
    return Joi.object().keys({
      lat: Joi.number().required(),
      lon: Joi.number().required(),
      lang: Joi.string().optional().default('es'),
      units: Joi.string().optional().default('metric'),
      mode: Joi.string().optional().default('JSON')
    }).options({ allowUnknown: true, stripUnknown: true })
  }

  getFuture() {
    return Joi.object().keys({
      lat: Joi.number().required(),
      lon: Joi.number().required(),
      cnt: Joi.number().required(),
      lang: Joi.string().optional().default('es'),
      units: Joi.string().optional().default('metric'),
      mode: Joi.string().optional().default('JSON')
    }).options({ allowUnknown: true, stripUnknown: true })
  }

  getNextDays() {
    return Joi.object().keys({
      lat: Joi.number().required(),
      lon: Joi.number().required(),
      cnt: Joi.number().required(),
      lang: Joi.string().optional().default('es'),
      units: Joi.string().optional().default('metric'),
      mode: Joi.string().optional().default('JSON')
    }).options({ allowUnknown: true, stripUnknown: true })
  }

}

module.exports = new CurrentWeatherValidator()