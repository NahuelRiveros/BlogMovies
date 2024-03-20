import sequelize from 'sequelize';
import {tbComentario,tbPelicula,tbComentarioPelicula} from "./module.js";

export const AddPelicula = async (req, res) => {
    console.log("Como tan muchacho");
    try {
        const { nombrePelicula,posterPelicula,descripcionPelicula } = req.body.values
        const AddingCat = await tbPelicula.create({ nombrePeli: nombrePelicula, posterPeli: posterPelicula, descripcionPeli:descripcionPelicula })
        res.json({ msg: "Creado correctamente" })
    } catch (err) {
        res.json({ msg: err.message })
    }
};
