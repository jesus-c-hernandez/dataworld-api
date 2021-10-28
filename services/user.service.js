const bcrypt = require("bcryptjs");
const UserRepository = require("../repositories/user.repository");
const User = require("../models/user.model");

class UserService {
  async create(user) {
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(user.password, salt);

    //console.log(user);
    return UserRepository.create({ ...user });
  }

  async update(user) {
    try {
      const uid = user.id;
      const userDB = await User.findById(uid);

      if (!userDB) {
        throw new Error("No existe un usuario con ese ID");
      }

      // Actualizaciones
      const { password, google, email, ...campos } = user;
      if (userDB.email != email) {
        const emailExist = await User.findOne({ email });
        if (emailExist) {
          throw new Error("Ya existe un usuario con ese email");
        }
      }
      if (!userDB.google) {
        campos.email = email;
      } else if (userDB.email !== email) {
        throw new Error("Usuarios de google no pueden cambiar su correo");
      }
      return UserRepository.update(uid, campos);
    } catch (error) {
      throw new Error("Verifique los datos");
    }
  }

  async get(user){

    const uid = user.id;
    const userDB = await User.findById(uid);

    if(!userDB){
      throw new Error("No existe un usuario con este ID");
    } else{
      return userDB;
    }

  }
}

module.exports = new UserService();
