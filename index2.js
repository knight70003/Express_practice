import express from "express"
import home, { Contact } from "./pages/home.js";
import login from "./pages/login.js";
import submit from "./pages/submit.js";
const app=express();

app.get("/",(req,res)=>{
    res.send(home())
})

app.get("/Contact",(req,res)=>{
    res.send(Contact())
})

app.get("/login",(req,res)=>{
    res.send(login());
})
app.get("/about",(req,res)=>{
    res.send(about())
})

app.post("/submit",(req,res)=>{
    res.send(submit())
})
app.listen(3400)


