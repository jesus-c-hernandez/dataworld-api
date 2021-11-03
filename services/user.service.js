const { response } = require("express");
const bcrypt = require("bcryptjs");
const UserRepository = require("../repositories/user.repository");
const User = require("../models/user.model");
const { generarJWT } = require("../helpers/jwt");

class UserService {
  async create(req, res = response) {
    const { email, password } = req.body;

    const emailExist = await User.findOne({ email });
    if (emailExist) {
      return res.status(400).json({
        result: false,
        msg: "El correo ya existe",
      });
    }
    const user = new User(req.body);

    // Encriptar contraseña
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    // Guardar usuario
    await user.save();

    // Generar token
    const token = await generarJWT(user.id);

    res.json({
      result: true,
      user,
      token,
    });
    console.log(error);
    res.status(500).json({
      result: false,
      msg: "Error inesperado... revisar logs",
    });
  }

  async update(req, res = response) {

    const uid = req.params.id;
    const userDB = await User.findById(uid);

    if (!userDB) {
      return res.status(404).json({
        result: false,
        msg: "No existe un usuario con ese id",
      });
    }

    // Actualizaciones
    const { password, google, email, ...campos } = req.body;
    if (userDB.email != email) {
      const emailExist = await User.findOne({ email });
      if (emailExist) {
        return res.status(400).json({
          result: false,
          msg: "Ya existe un usuario con ese email",
        });
      }
    }
    if (!userDB.google) {
      campos.email = email;
    } else if (userDB.email !== email) {
      return res.status(400).json({
        result: false,
        msg: "Usuarios de google no pueden cambiar su correo",
      });
    }
    const userUpdated = await User.findByIdAndUpdate(uid, campos, {
      new: true,
    });

    res.json({
      result: true,
      user: userUpdated,
    });

    console.log(error);
    res.status(500).json({
      result: false,
      msg: "Error inesperado",
    });
  }

  async get(user) {
    const uid = user.id;
    const userDB = await User.findById(uid);

    if (!userDB) {
      throw new Error("No existe un usuario con este ID");
    } else {
      return userDB;
    }
  }
}

module.exports = new UserService();
