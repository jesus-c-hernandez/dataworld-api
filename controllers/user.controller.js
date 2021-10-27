const UserService = require('../services/user.service')

class UserController {
  async create(req, res, next) {
    try {
      const data = await UserService.create(req.userData)
      console.log('data', data)
      res.status(200).json({ result: true, data })
      next()
    } catch (error) {
      res.status(400).json({ result: false, error })
      next(error)
    }
  }

  async update(req, res, next) {
    try {
      const data = await UserService.update(req.userData, res)
      console.log('data', data)
      res.status(200).json({ result: true, data })
      next()
    } catch (error) {
      res.status(400).json({ result: false, error: error.message })
      next(error)
    }
  }
}

module.exports = new UserController()