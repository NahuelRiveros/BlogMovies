import express from 'express';
import { AddPelicula,AddComentario,AddComentarioPelicula,listPeliculas,listComentarios,listComentariosPelis } from '../controller/controllers.js';

const rutas = express.Router();

rutas.post('/peliculas/', AddPelicula);
rutas.post('/comentarios/', AddComentario);
rutas.post('/comentariosPeliculas/', AddComentarioPelicula);
rutas.get('/peliculasL/', listPeliculas);
rutas.get('/comentariosL/', listComentarios);
rutas.get('/comentariosPeliculasL/', listComentariosPelis);

export default rutas;