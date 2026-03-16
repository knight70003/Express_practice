/* const express = require("express")
const app = express()

app.use(express.static("public"))
app.get("/",(req,res)=>{
    res.sendFile(__dirname+ "/public/home.html")
})

app.listen(3690,()=>{
    console.log("Server is running")
}) */

const express = require("express")
const path = require("path")

const app = express()

app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+"/public/home.html"))
})
app.listen(3690,()=>{
    console.log("server is running")
})