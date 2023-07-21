const canchaModel = require ("../models/canchas.model");


//POST
const crearCancha = async (req, res) => { //siempre en ese orden
    try{
        const cancha = new canchaModel(req.body);
        await cancha.save();
        res.status(201).json(cancha);
    }
    catch(error){
        console.log(error);
    }
}

//GET
const getAllCanchas = async (req, res) => {
    try {
        const allCanchas = await canchaModel.find(); //Trae las canchas
        res.status(200).json(allCanchas);
    }
    catch(error){
        console.log(error);
    }
}

//GET BY ID
const getCanchaByID = async (req, res) => {
    const id = req.params.id;
    const cancha = await canchaModel.findById(id);
    if(cancha) {
        res.json(cancha);
    }
    else {
        res.status(404).json({error: "Cancha no encontrada"})
    }
}

//PUT
const updateCancha = async (req, res) => {
    try{
        const id = req.params.id;
        const cancha = await canchaModel.findById(id);
        if(cancha){
            cancha.nombre = req.body.nombre;
            cancha.capacidad = req.body.capacidad;
            await cancha.save();
            res.status(200).json(cancha);
        }
        else{
            res.status(404).json({error: "Cancha no encontrada"});
        }
    }
    catch(error){
        console.log(error);
    }
}

//DELETE
const deleteCancha = async (req, res) => {
    try{
        const id = req.params.id;
        await canchaModel.findOneAndDelete({_id: id});
        res.status(200).json({message: "Cancha eliminada"});
    }
    catch(error){
        console.log(error);
    }
}


module.exports = {crearCancha, getAllCanchas, getCanchaByID, updateCancha, deleteCancha};