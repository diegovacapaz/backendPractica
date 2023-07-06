import express from "express";
import 'dotenv/config'; //Para acceder a las variables de entorno
import cors from 'cors';
import morgan from 'morgan';

//PODES USAR NODEMON PONIENDO EL COMANDO DEV EN PACKAGEJSON, PARA QUE LOS CAMBIOS SE ACTUALIZEN SOLOS

console.log("Hellor World Backend");

//Creamos una instancia de express
const app = express();

//Configuramos el puerto para ejecutar el backend
app.set("port", process.env.PORT || 5050);

//Inicializamos nuestro backend
app.listen(app.get("port"), ()=>{
    console.log("Backend listening on port " + app.get("port"));
}).on("error",(e)=>{
    console.log("Error: " + e);
    process.exit(1);
})

//Middlewares: configuraciones extras del backend antes de qie se ejecuten las rutas

//Middleware nativos de express
app.use(express.json()); //Permite recibir el obj en formato json
app.use(express.urlencoded({extended: true})); //Permite recibir parametros en las rutas

//Middleware de terceros
app.use(morgan("dev")); //Brinda detalles en la terminal
app.use(cors()); //Permite recibir peticiones remotas

//Primer endpoint o ruta de prueba
app.get("/test", (request, response)=>{
    console.log("Objeto req: "+ request);
    // console.log("Entro en GET TEST");
    // response.send("Aqui va la respuesta");
    response.status(200).json({message: "Aqui va la respuesta"});
});