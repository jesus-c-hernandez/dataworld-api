const Joi = require('joi')

class UserValidator {
  create() {
    return Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
      google: Joi.boolean().optional().default(false),
      country: Joi.string().required(),
      timeZone: Joi.string().required(),
      language: Joi.string().required()
    }).options({ allowUnknown: true, stripUnknown: true })
  }

  update() {
    return Joi.object().keys({
      id: Joi.string().length(24).required(),
      name: Joi.string().required(),
      email: Joi.string().required(),
      google: Joi.boolean().optional().default(false),
      country: Joi.string().required(),
      timeZone: Joi.string().required(),
      language: Joi.string().required()
    }).options({ allowUnknown: true, stripUnknown: true })
  }

  get() {
    return Joi.object().keys({
      id: Joi.string().required(),
    }).options({ allowUnknown: true, stripUnknown: true })
  }
}

module.exports = new UserValidator();