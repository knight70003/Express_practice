//const express=require("express");    // Acqma syntax 
import express from "express";
import home,{Contact} from "./pages/home.js";
import about from "./pages/login.js";

const app = express();
app.get("",(req,resp)=>{
    resp.send(home())
    });
app.get("/about",(req,resp)=>{
    resp.send(about())
});
app.get("/Contact",(req,resp)=>{
    resp.send(Contact())

});
app.listen(1300)