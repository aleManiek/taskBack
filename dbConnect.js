const config = require('./config');
const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try{
        await mongoose.connect(config.database, { useNewUrlParser: true,useUnifiedTopology: true })
        console.log('Database is connected');
    }catch(error){
        console.log('Can not connect to the database'+ error)
    }
}

module.exports = connectToDatabase