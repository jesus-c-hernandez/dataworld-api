const AuthService = require('../services/auth.service');
const { generarJWT } = require('../helpers/jwt');
const User = require('../models/user.model');

class AuthController {
  async login(req, res, next) {
    try {
      const token = await AuthService.login(req, res)
      console.log('token', token)
      res.status(200).json({ result: true, token })
      next()
    } catch (error) {
      res.status(400).json({ result: false, error })
      next(error)
    }
  }

  async renew(req, res, next) {
    const uid = req.uid;

    // Generar token
    const token = await generarJWT( uid );

    //Obtener el usuario por id 

    const user = await User.findById( uid );

    res.json({
        result: true,
        token,
        user
    });
  }
}

module.exports = new AuthController();