import express from 'express';
import { AddPelicula,AddComentario,AddComentarioPelicula,listPeliculas,listComentarios,listComentariosPelis } from '../controller/controllers.js';
import multer from "multer"
import fs from "fs"
const upload = multer ({dest: "uploads/"})

const rutas = express.Router();

rutas.post('/peliculas/', upload.single("posterPelicula"),async (req,res) => {
    console.log("ENTRO RUTAS")
    console.log(req)
    const fileTemPath = req.file.path
    const fileContent = fs.readFileSync(fileTemPath);
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