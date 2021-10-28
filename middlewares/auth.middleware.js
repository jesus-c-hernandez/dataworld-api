const AuthValidator = require('../validators/auth.validator')


class AuthMiddleware {
  async login(req, res, next) {
    try {
      req.authData = await AuthValidator.login().validateAsync({
          ...req.query,
          ...req.params,
          ...req.body
        })
      next()
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new AuthMiddleware();