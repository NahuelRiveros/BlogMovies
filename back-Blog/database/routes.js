import express from 'express';
import { AddPelicula } from './controllers.js';

const rutas = express.Router();

rutas.post('/pelis/', AddPelicula);

export default rutas;