const AuthService = require('../services/auth.service')

class AuthController {
  async login(req, res, next) {
    try {
      const token = await AuthService.login(req.authData)
      console.log('token', token)
      res.status(200).json({ result: true, token })
      next()
    } catch (error) {
      res.status(400).json({ result: false, error })
      next(error)
    }
  }
}

module.exports = new AuthController();