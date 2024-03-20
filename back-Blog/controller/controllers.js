import sequelize from 'sequelize';
import {tbComentario,tbPelicula,tbComentarioPelicula} from "../database/module.js";

export const AddPelicula = async (req, res) => {
    try {
        const { nombrePelicula, posterPelicula, descripcionPelicula } = req.body;
        const AddingCat = await tbPelicula.create({ nombrePelicula, posterPelicula, descripcionPelicula });
        res.json({ msg: "Creado correctamente" });
    } catch (err) {
        res.json({ msg: err.message });
    }
};

export const AddComentario = async (req, res) => {
    try {
        const { nombreAutor, comentarioCompleto, fechaComentario, puntuacion } = req.body;
        const AddingCat = await tbComentario.create({ nombreAutor, comentarioCompleto, fechaComentario, puntuacion });
        res.json({ msg: "Creado correctamente" });
    } catch (err) {
        res.json({ msg: err.message });
    }
};

export const AddComentarioPelicula = async (req, res) => {
    try {
        const { idPelicula, idComentario } = req.body;
        const AddingCat = await tbComentarioPelicula.create({ idPelicula, idComentario });
        res.json({ msg: "Creado correctamente" });
    } catch (err) {
        res.json({ msg: err.message });
    }
};