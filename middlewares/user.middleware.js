const UserValidator = require('../validators/user.validator')


class UserMiddleware {
  async create(req, res, next) {
    try {
      req.userData = await UserValidator.create().validateAsync({
          ...req.query,
          ...req.params,
          ...req.body
        })
      next()
    } catch (error) {
      next(error)
    }
  }

  async update(req, res, next) {
    try {
      req.userData = await UserValidator.update().validateAsync({
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

module.exports = new UserMiddleware();