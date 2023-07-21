import express from "express";
import 'dotenv/config'; //Para acceder a las variables de entorno
import cors from 'cors';
import morgan from 'morgan';
import connectDb from "./database/db";
// const connectDb = require("./database/db");

//PODES USAR NODEMON PONIENDO EL COMANDO DEV EN PACKAGEJSON, PARA QUE LOS CAMBIOS SE ACTUALIZEN SOLOS

console.log("Hellow World Backend");

//Creamos una instancia de express
const app = express();

//Configuramos el puerto para ejecutar el backend
app.set("port", process.env.PORT || 5050);

//Inicializamos nuestro backend

const initApp = async () => {
    try{
        await connectDb();
        
        app.listen(app.get("port"), ()=>{
            console.log("Backend listening on port " + app.get("port"));
        }).on("error",(e)=>{
            console.log("Error: " + e);
            process.exit(1);
        });    
        
    }
    catch(error) {
        console.log(error);
        process.exit(1);
    }
}

initApp();

//Middlewares: configuraciones extras del backend antes de qie se ejecuten las rutas

//Middleware nativos de express
app.use(express.json()); //Permite recibir el obj en formato json
app.use(express.urlencoded({extended: true})); //Permite recibir parametros en las rutas

//Middleware de terceros
app.use(morgan("dev")); //Brinda detalles en la terminal
app.use(cors()); //Permite recibir peticiones remotas

//Haciendo el endpoint /api e invocando al routes.js
app.use("/api", require("./routes/routes.js"));//llamo a routes