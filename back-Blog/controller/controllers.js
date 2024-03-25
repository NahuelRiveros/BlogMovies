import sequelize from 'sequelize';
import {tbComentario,tbPelicula,tbComentarioPelicula} from "../database/module.js";
import fs from "fs";

export const AddPelicula = async (req, res) => {
    console.log("ENTRO CONTROLLER")
    const fileTemPath = req.file.path
    const fileContent = fs.readFileSync(fileTemPath);
    try {
        const { tema, descripcion, puntuacionG } = req.body;
        const AddingCat = await tbPelicula.create({ nombrePelicula:tema, posterPelicula:fileContent, descripcionPelicula:descripcion, puntuacionGeneral:0 });
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

export const listPeliculas = async (req, res) => {
    try {
        const listaPeli = await tbPelicula.findAll();
        const listaPeliImagen = listaPeli.map((peli) => {
            const peliculaD = peli.toJSON();
            peliculaD.imagen = Buffer.from(peliculaD.posterPelicula).toString(
                "base64"
            );
            return peliculaD;
        });
        return res.json({jsonPeli:listaPeliImagen});
        res.json({ msg: "Creado correctamente" });
    } catch (err) {
        res.json({ msg: err.message });
    }
}

export const listComentarios = async (req, res) => {
    try {
        const listComentario = await tbComentario.findAll();
        return res.json({jsonComentario:listComentario});
        res.json({ msg: "Creado correctamente" });
    } catch (err) {
        res.json({ msg: err.message });
    }
}

export const listComentariosPelis = async (req, res) => {
    try {
        const listComentarioPeli = await tbComentarioPelicula.findAll();
        const listComentario = await tbComentario.findAll();
        return res.json({jsonComentarioPeli:listComentarioPeli,jsonComentario:listComentario});
        res.json({ msg: "Creado correctamente" });
    } catch (err) {
        res.json({ msg: err.message });
    }
}