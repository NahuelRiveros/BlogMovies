import express from 'express';
import { AddPelicula,AddComentario,AddComentarioPelicula } from '../controller/controllers.js';

const rutas = express.Router();

rutas.post('/peliculas/', AddPelicula);
rutas.post('/comentarios/', AddComentario);
rutas.post('/comentariosPeliculas/', AddComentarioPelicula);

export default rutas;