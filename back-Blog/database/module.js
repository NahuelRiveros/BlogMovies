import db from "./db.js";
import { DataTypes } from 'sequelize';

export const tbComentario = db.define(
    "comentario",
    {
        idComentario: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
        },
        nombreAutor: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        comentarioCompleto: {
            type: DataTypes.STRING(10000),
            allowNull: false,
        },
        puntuacion: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    { freezeTableName: true }
);

export const tbPelicula = db.define(
    "pelicula",
    {
        idPelicula: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
        },
        nombrePelicula: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        posterPelicula: {
            type: DataTypes.BLOB('long'),
            allowNull: true,
        },
        descripcionPelicula: {
            type: DataTypes.STRING(1064),
            allowNull: false,
        },
        puntuacionGeneral: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    },
    { freezeTableName: true }
);

export const tbComentarioPelicula = db.define(
    "comentarioPelicula",
    {
        idComentarioPelicula: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
        },
        idPelicula: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        idComentario: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    { freezeTableName: true }
);

//comentario a comentarioPelicula
tbComentarioPelicula.belongsTo(tbComentario, { foreignKey: { name: 'idComentario' } });
tbComentario.hasMany(tbComentarioPelicula, { foreignKey: { name: 'idComentario' } });

//pelicula a comentarioPelicula
tbComentarioPelicula.belongsTo(tbPelicula, { foreignKey: { name: 'idPelicula' } });
tbPelicula.hasMany(tbComentarioPelicula, { foreignKey: { name: 'idPelicula' } });

tbComentarioPelicula.addHook('afterCreate', async (comentario, options) => {
    console.log("SE ESTA HACIENDO EL TRIGGER")
    try {
        const ultimoComentarioId = await tbComentarioPelicula.max("idComentarioPelicula");
        console.log(ultimoComentarioId)
        const ultimoComentario = await tbComentarioPelicula.findByPk(ultimoComentarioId);
        console.log(ultimoComentario, "/b", "se realizo con exito: p1")
        const peliculaRequest = await tbComentarioPelicula.findAll({where:{idPelicula: ultimoComentario.idPelicula}})
        console.log(peliculaRequest, "/b", "se realizo con exito: p2")
        const tamaño = peliculaRequest.length
        console.log(tamaño, "/b", "se realizo con exito: p3")
        const pelicula = await tbPelicula.findByPk(ultimoComentario.idPelicula)
        console.log(pelicula, "/b", "se realizo con exito: p4")
        const ultimoComentarioPuntuacion = await tbComentario.findByPk(ultimoComentario.idComentario)
        console.log(ultimoComentarioPuntuacion, "/b", "se realizo con exito: p5")
        const puntuacionFinal = ((pelicula.puntuacionGeneral * (tamaño - 1)) + ultimoComentarioPuntuacion.puntuacion) / tamaño
        console.log(puntuacionFinal, "/b", "se realizo con exito: p6")
        const actualizarPuntuacion = await pelicula.update({puntuacionGeneral: puntuacionFinal})
        return(console.log("Se ha realizado con exito"))
    } catch (err) {
        console.error(err);
    }
  });

//   tbKilometro.addHook('afterCreate', async (kilometro, options) => {
//     const usuario = await tbUser.findOne({ where: { dniUsuario: kilometro.fkUser } });
//     const categoria = await tbCategoria.findOne({ where: { idCategoria: kilometro.fkCategoria } });
//     const puntosKilometro = categoria.puntosCategoria * kilometro.kmRecorrido;
//     const puntaje = await tbKMTotal.findOne({ where: { fkUser: usuario.dniUsuario } });
//     if (puntaje) {
//       console.log("se intento agregar el puntaje")
//       puntaje.puntaje += puntosKilometro;
//       await puntaje.save();
//     } else {
//       await tbKMTotal.create({
//         fkUser: usuario.dniUsuario,
//         puntaje: puntosKilometro
//       });
//     }
//   });