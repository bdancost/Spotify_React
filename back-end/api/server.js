// API significa Application Programing Interface

import express from "express";
import { db } from "./connect.js";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/artists", async (req, res) => {
  res.send(await db.collection("artists").find({}).toArray());
});

app.get("/songs", async (req, res) => {
  res.send(await db.collection("songs").find({}).toArray());
});

app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
