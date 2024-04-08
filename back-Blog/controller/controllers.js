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
        // Obtener datos del cuerpo de la solicitud
        const { idPelicula, nombreAutor, comentarioCompleto, puntuacion } = req.body;
        // Crear un nuevo comentario en la base de datos
        const nuevoComentario = await tbComentario.create({ nombreAutor, comentarioCompleto, puntuacion });
        // Obtener el ID del último comentario creado
        const ultimoComentario = await tbComentario.max("idComentario");
        console.log("se creo el comentario")
        // Crear una conexión entre la película y el nuevo comentario
        await tbComentarioPelicula.create({ idPelicula, idComentario: ultimoComentario }); 
        console.log("se creo la relacion")
        // Enviar respuesta de éxito al cliente
        res.json({ success: true, msg: "Comentario agregado correctamente" });
    } catch (err) {
        // Enviar respuesta de error al cliente con un mensaje específico del error
        res.status(500).json({ success: false, error: err.message });
    }
};

// export const AddComentarioPelicula = async (req, res) => {
//     try {
//         const ultimoComentarioId = await tbComentario.max("idComentario")
//         const AddingCat = await tbComentarioPelicula.create({ idPelicula, idComentario });
//         res.json({ msg: "Creado correctamente" });
//     } catch (err) {
//         res.json({ msg: err.message });
//     }
// };

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
        //res.json({ msg: "Creado correctamente" });
    } catch (err) {
        res.json({ msg: err.message });
    }
}

export const listComentarios = async (req, res) => {
    try {
        const listComentario = await tbComentario.findAll();
        return res.json({listComentario});
        res.json({ msg: "Creado correctamente" });
    } catch (err) {
        res.json({ msg: err.message });
    }
}

export const listComentariosEspecificos = async (req, res) => {
    try {
        const idPelicula = req.body.idBlog;
        
        // Obtener los IDs de los comentarios asociados a la película
        const comentarioPeliculaIds = (await tbComentarioPelicula.findAll({
            where: { idPelicula },
            attributes: ['idComentario']
        })).map(comentarioPelicula => comentarioPelicula.idComentario);

        // Obtener los comentarios asociados a los IDs obtenidos
        const comentarios = await tbComentario.findAll({
            where: { idComentario: comentarioPeliculaIds }
        });

        return res.json({ comentarios });
        
    } catch (err) {
        console.log(err.message);
        return res.status(500).json({ error: 'Hubo un error al procesar la solicitud.' });
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






