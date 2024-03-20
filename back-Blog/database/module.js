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
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        descripcionPelicula: {
            type: DataTypes.STRING(1064),
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