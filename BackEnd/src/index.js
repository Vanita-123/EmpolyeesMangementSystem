import express from 'express';
import dotenv from 'dotenv';
import databaseConnect from './db/database.js';
import router from './routes/employee.routes.js';
import bodyParser from 'body-parser';
const app= express();

 dotenv.config({
    path :"./.env",
 })
const Port = process.env.Port || 4001; 
app.get("/", (req,res)=>{
    res.send("hello");
})
app.use(bodyParser.json()); 
// router
app.use("/Employees", router)


app.listen(Port ,()=>{
    console.log(`server is running  ${Port}`)
}) 