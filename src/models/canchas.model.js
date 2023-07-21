const mongoose = require("mongoose");
const { Schema } = mongoose;

const canchasSchema = new Schema({
    nombre: String,
    capacidad: Number
}, {versionKey: false}); //El versionKey es para que no cree automaticamente un campo version

const canchaModel = mongoose.model("canchas", canchasSchema);

module.exports = canchaModel;