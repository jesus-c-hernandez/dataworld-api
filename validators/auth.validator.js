const Joi = require('joi')

class AuthValidator {
  login() {
    return Joi.object().keys({
      email: Joi.string().required(),
      password: Joi.string().required()
    }).options({ allowUnknown: true, stripUnknown: true })
  }
}

module.exports = new AuthValidator();