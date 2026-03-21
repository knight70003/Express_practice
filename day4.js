/* const express= require("express")
const app = express()


app.use(express.urlencoded({extended: true}))

app.get("/",(req,res)=>{
res.sendFile(__dirname+"/pages/form.html")

})
app.post("/log",(req,res)=>{
    const {username,password} = req.body
    res.send("Login Recieved")
})
app.listen(4390,()=>{
    console.log("Server is running")
}) */

/* const express = require("express")
const app = express()

app.use(express.urlencoded({extented: true}))

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/pages/form.html")
})

app.post("/log",(req,res)=>{
    const {username,password} = req.body
    res.send("Login recieved")
})
app.listen(4390,()=>{
    console.log("server is running")
}) */


const express = require("express")
const app = express()

app.use(express.urlencoded({extended: true}))

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/pages/form.html")
})
app.post("/log",(req,res)=>{
    const {username,password} = req.body
    res.send("login recieved")
})

app.listen(4390,()=>{
    console.log("everything is sorted")

})