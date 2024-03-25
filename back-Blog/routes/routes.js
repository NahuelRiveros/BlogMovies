import express from 'express';
import { AddPelicula,AddComentario,AddComentarioPelicula,listPeliculas,listComentarios,listComentariosPelis } from '../controller/controllers.js';
import multer from "multer"
import fs from "fs"
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'C:/Users/raul_/Desktop/UCP/QuintoAno/PrimerCuatrimestre/SistemasInteligentes/blog/BlogMovies/back-Blog/uploads'); // Directorio de destino donde se guardarán los archivos
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Nombre del archivo
    }
    });
    const upload = multer({ storage: storage });

const rutas = express.Router();

rutas.post('/peliculas/', upload.single("image"),async (req,res) => {
    console.log(req);
    const fileTemPath = req.file.path;
    const fileContent = fs.readFileSync(fileTemPath);
    fs.unlinkSync(fileTemPath);
    console.log(fileContent);
    try {
        const { tema, descripcion } = req.body;
        const AddingCat = await tbPelicula.create({ nombrePelicula:tema, posterPelicula:fileContent, descripcionPelicula:descripcion, puntuacionGeneral:0 });
        res.json({ msg: "Creado correctamente" });
    } catch (err) {
        res.json({ msg: err.message });
    }
})
rutas.post('/comentarios/', AddComentario);
rutas.post('/comentariosPeliculas/', AddComentarioPelicula);
rutas.get('/peliculasL/', listPeliculas);
rutas.get('/comentariosL/', listComentarios);
rutas.get('/comentariosPeliculasL/', listComentariosPelis);

export default rutas;