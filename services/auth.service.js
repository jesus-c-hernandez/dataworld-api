const bcrypt = require("bcryptjs");
const User = require("../models/user.model");
const {generarJWT} = require("../helpers/jwt");

class AuthService {

    async login(user){

        const {email, password} = user;
        const userDB = await User.findOne({email});

        if(!userDB){
            throw new Error("Email no encontrado");
        }

        const validPass = bcrypt.compareSync( password, userDB.password );

        if(!validPass){
            throw new Error("Contraseña no valida");
        }

        const token = await generarJWT(userDB.id);

        return token;

    }

}

module.exports = new AuthService();