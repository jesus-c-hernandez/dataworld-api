const bcrypt = require('bcryptjs');
const UserRepository = require('../repositories/user.repository');
const User = require('../models/user.model');

class UserService {

    async create(user){

        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync( user.password, salt );

        //console.log(user);
        return UserRepository.create({...user});

    }

    async update(user){

        try {
            console.log(user);
            const uid = user.id;
            const userDB = await User.findById(uid);

            if(!userDB){
                throw new Error("No existe un usuario con ese ID");
            }

        } catch (error) {
            //console.log(error);
            return error;
            //throw new Error("Error inesperado");
        }

    }

}

module.exports = new UserService()