//importo express y llamo al router
const express = require('express');
const router = express.Router();

const canchassController = require("../controllers/canchas.controller");

//GET
router.get("/canchas", canchassController.getAllCanchas);

router.get("/canchas/:id", canchassController.getCanchaByID);

//POST
router.post("/canchas", canchassController.crearCancha);

//PUT
router.put("/canchas/:id", canchassController.updateCancha);

//DELETE
router.delete("/canchas/:id", canchassController.deleteCancha);

// //importo los archivos
// const {equiposArray, canchasArray} = require("../equipos.js"); //Al destructurar, llamar igual las partes
// const estadios = require("../estadios.js");

// //GET
// router.get("/equipos", (request, response)=>{
//     response.json(equiposArray);
// });

// router.get("/canchas", (request, response)=>{
//     response.send(canchasArray);
// });

// router.get("/estadios", (request, response)=>{
//     response.send(estadios);
// });

// router.get("/estadios/:id", (request, response)=>{ //Con el :id digo que es un parametro
//     const id = request.params.id; //Solicito la info del parametro
//     const estadio = estadios.find((estadio)=>estadio.id == id);
//     estadio && response.send(estadio);
//     // !estadio && response.status(404).send("No existe este estadio");
//     !estadio && response.status(404).json({error: "No existe este estadio"});
// });

// //POST
// router.post("/estadios", (request, response)=>{
//     const estadio = request.body; //Obtengo el body del http
//     estadios.push(estadio); //Pusheo el objeto a los estadios
//     response.status(201).json(estadio); //Envio el estadio agregado si hay un 201
// });

// //PUT
// router.put("/estadios/:id", (request, response)=>{
//     const id = request.params.id;
//     const estadio = estadios.find( estadio => estadio.id == id );
//     if(estadio){
//         estadio.nombre = request.body.nombre;

//         response.status(200).json("Estadio modificado");
//         response.json(estadio);
//     }
//     else{
//         response.status(404).json("Estadio no encontrado");
//     }

// });

// //DELETE
// router.delete("/estadios/:id", (request, response)=>{
//     const id = request.params.id;
//     const index = estadios.findIndex(estadio => estadio.id == id);
//     if(index != -1) {
//         estadios.splice(index, 1);
//         response.status(200).json("Estadio eliminado");
//     }
//     else{
//         response.status(404).json("Estadio no encontrado");
//     }
// });

module.exports = router;