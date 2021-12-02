const {ciudades} = require('../list/city-list.json')

class CityController {
  async get(req, res, next) {
    try {
      res.status(200).json({ result: true, data: ciudades });
      next();
    } catch (error) {
      res.status(400).json({ result: false, error });
      next(error);
    }
  }
}

module.exports = new CityController();
