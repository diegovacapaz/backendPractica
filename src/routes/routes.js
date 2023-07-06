const express = require('express');

const router = express.Router();
const {equiposArray, canchasArray} = require("../equipos.js"); //Al destructurar, llamar igual las partes
const estadios = require("../estadios.js");

//GET
router.get("/equipos", (request, response)=>{
    response.json(equiposArray);
});

router.get("/canchas", (request, response)=>{
    response.send(canchasArray);
});

router.get("/estadios", (request, response)=>{
    response.send(estadios);
});

router.get("/estadios/:id", (request, response)=>{
    const id = request.params.id;
    const estadio = estadios.find((estadio)=>estadio.id == id);
    estadio && response.send(estadio);
    !estadio && response.status(404).send("No existe este estadio");
});

//POST

//PUT

//DELETE

module.exports = router;