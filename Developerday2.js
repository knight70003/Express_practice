import express from "express"
const app = express();

app.get("/", (req,res) =>{
    res.send("Home page");
});
app.get("/about",(req,res)=>{
    res.send("about page");

});
app.get("/contact",(req,res)=>{
    res.send("Contact page")
});
app.listen(3001,()=>{
    console.log("Server is running");
});