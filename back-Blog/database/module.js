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
        fechaComentario: {
            type: DataTypes.DATEONLY,
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
            type: DataTypes.INTEGER,
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
        const peliculaRequest = await tbComentarioPelicula.findAll({where:{idPelicula: ultimoComentarioId.idPelicula}})
        const tamaño = length(peliculaRequest)
        const peliculaRequest2 = await tbPelicula.findById({where:{idPelicula: ultimoComentarioId.idPelicula}})
        const ultimoComentarioPuntuacion = await tbComentario.findById({where: {idComentario: ultimoComentarioId.idComentario}})
        const tamañoAnterior = tamaño - 1








        const totalPuntuacion = comentariosPelicula.reduce((sum, cp) => sum + cp.comentario.puntuacion, 0);
        console.log(totalPuntuacion)
        const nuevaPuntuacionPromedio = totalPuntuacion / comentariosPelicula.length;
        console.log(nuevaPuntuacionPromedio)
        const pelicula = await tbPelicula.findByPk(comentariosPelicula[0].idPelicula);
        console.log(pelicula)
        if (pelicula) {
            console.log()
            await pelicula.update({ puntuacionGeneral: nuevaPuntuacionPromedio });
        }
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