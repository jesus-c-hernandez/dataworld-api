const bcrypt = require("bcryptjs");
const { response } = require('express');
const User = require("../models/user.model");
const {generarJWT} = require("../helpers/jwt");


class AuthService {

    async login(req, res = response){

        const { email, password } = req.body;

        // Verificar email
        const userDB = await User.findOne({ email });

        if( !userDB ){
            res.status(404).json({
                result: false,
                msg: 'Email no encontrado'
            });
        }

        // Verificar password
        const validPass = bcrypt.compareSync( password, userDB.password );
        if( !validPass ){
            return res.status(400).json({
                result: false,
                msg: 'Contraseña no valida'
            });
        }

        // Generar token
        const token = await generarJWT( userDB.id );

        res.json({
            result: true,
            token,
            user: userDB
        });
        console.log( error );
        res.status(500).json({
            result: false,
            msg: 'Hable con el administrador'
        });
    }

}

module.exports = new AuthService();