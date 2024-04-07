import express from 'express';
import { AddPelicula,AddComentario,listPeliculas,listComentarios,listComentariosEspecificos,listComentariosPelis } from '../controller/controllers.js';
import multer from "multer"
import fs from "fs"
import { tbPelicula } from "../database/module.js"

const upload = multer({ dest: "uploads/" });

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, '/uploads'); // Directorio de destino donde se guardarán los archivos
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + '-' + file.originalname); // Nombre del archivo
//     }
//     });
//     const upload = multer({ storage: storage });

const rutas = express.Router();

rutas.post('/peliculas/', upload.single("image"),async (req,res) => {
    console.log(req.body);
    const fileTemPath =  req.file.path;
    const fileData = fs.readFileSync(fileTemPath);
    const { titulo, descripcion } = req.body;
    try {
        const AddingCat = await tbPelicula.create({ nombrePelicula:titulo, posterPelicula:fileData, descripcionPelicula:descripcion, puntuacionGeneral:0 });
        fs.unlinkSync(fileTemPath);
        res.json({ msg: "Creado correctamente" });
    } catch (err) {
        console.log("hola", "  ", err.message);
    }
})
rutas.post('/comentarios/', AddComentario);
//rutas.post('/comentariosPeliculas/', AddComentarioPelicula);
rutas.get('/peliculasL/', listPeliculas);
rutas.get('/comentariosL/', listComentarios);
rutas.post('/comentariosE/', listComentariosEspecificos);
rutas.get('/comentariosPeliculasL/', listComentariosPelis);

export default rutas; 