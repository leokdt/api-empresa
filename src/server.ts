import "reflect-metadata";
import express from "express";
import "./database";
import { routes } from "../routes";

// Comando para iniciar função do Express.
const app = express();

app.use(express.json());

// Apontamento das Rotas
app.use(routes);

// Indicação de porta para execução da aplicação.
app.listen(3000, () => console.log("Server is running."));

