const User = require('../models/user.model')

class UserRepository {

    async create(user){
        try {

            const userDB = new User(user);
            await userDB.save();

            return userDB;

        } catch (error) {
            return error;
        }
        
    }

}

module.exports = new UserRepository()