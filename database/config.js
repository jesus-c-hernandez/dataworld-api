const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async () => {

    try {
        //mongoose.set('useCreateIndex', true);
        mongoose.connect( process.env.DB_CNN, 
                {
                    useNewUrlParser: true, 
                    useUnifiedTopology: true
                });
                console.log('DB Online');
    } catch (error) {
        console.log( error );
        throw new Error('Error a la hora de iniciar la DB ver logs');
    }

}

module.exports = {
    dbConnection
}