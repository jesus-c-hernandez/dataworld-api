const AuthValidator = require('../validators/auth.validator')
require('dotenv').config();
const jwt = require('jsonwebtoken');

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

  async renew(req, res, next) {
    const token = req.header('x-token');

    if ( !token ) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la petición'
        });
    }

    try {

        const { uid } = jwt.verify( token, process.env.JWT_SECRET );
        req.uid = uid;

        next();

    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no válido'
        });
    }
  }
}

module.exports = new AuthMiddleware();