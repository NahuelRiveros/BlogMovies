import express from "express";
import cors from "cors";
import dotevn from "dotenv";
import db from "./database/db.js";

const env = dotevn.config();
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT;
try {
    await db.authenticate();
    console.log("Connection has been established successfully.");
} catch (err) {
    console.error("Unable to connect to the database:", err);
}
app.listen(port, (req, res) => {
    console.log(`sever esta corriendo en http://localhost:${port}/`);
});