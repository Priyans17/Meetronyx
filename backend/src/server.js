// const express = require("express");
import express from "express";
import { ENV } from "./lib/env.js";

const app = express();

console.log(process.env.PORT);
console.log(process.env.DB_URL);

app.get("/", (req,res) => {
    res.status(200).json({msg: "success from api"}) //if you visited to the homeroute 
})          

const PORT = process.env.PORT;

app.listen(ENV.PORT, () => console.log(`Server is running on port: ${ENV.PORT}`));
