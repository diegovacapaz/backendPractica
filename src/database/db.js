const mongoose = require('mongoose');
const canchaModel = require("../models/canchas.model");

const URI = process.env.URI;
const DB = process.env.DB;

const crearCancha = async () => {
    try{
        const cancha = new canchaModel({
            nombre: "Ciudadela",
            capacidad: "17000"
        });
        await cancha.save();
        console.log("Cancha saved");
    }
    catch(error){
        console.log(error);
    }
}

const connectDb = async () => {
    try{
        await mongoose.connect(`${URI}/${DB}`, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to database");
        const allCanchas = await canchaModel.find(); //Busca todos los documentos
        console.log(allCanchas);
        /* crearCancha();*/
    }
    catch(error) {
        console.log(error);
    }
}

module.exports = connectDb;