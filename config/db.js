const mongoose = require('mongoose');
require('dotenv').config({
    path:'.env'
});

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {

        })
        console.log('DB CONECTADA')
    } catch (error) {
       console.log('Error', error);
       process.exit(1); 
    }
}


module.exports = connectDB;