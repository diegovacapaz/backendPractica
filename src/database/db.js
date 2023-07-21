const mongoose = require('mongoose');

const URI = process.env.URI;
const DB = process.env.DB;


const connectDb = async () => {
    try{
        await mongoose.connect(`${URI}/${DB}`, { useNewUrlParser: true, useUnifiedTopology: true }); //Este objeto es para manejo de warnings
        console.log("Connected to database");
    }
    catch(error) {
        console.log(error);
    }
}

module.exports = connectDb;