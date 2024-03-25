import express from "express";
import cors from "cors";
import dotevn from "dotenv";
import db from "./database/db.js";
import Sequelize from './database/db.js';
import rutasUser from './routes/routes.js';
import {tbComentario,tbPelicula,tbComentarioPelicula} from "./database/module.js";

const env = dotevn.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/",rutasUser);
const port = process.env.PORT;
try {
    await db.authenticate();
    console.log("Connection has been established successfully.");
} catch (err) {
    console.error("Unable to connect to the database:", err);
}
app.listen(port, (req, res) => {
    console.log(`server esta corriendo en http://localhost:${port}/`);
});