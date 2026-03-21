/* const express= require("express")
const app = express()

app.get("/api/users",(req,res)=>{
    res.json([{name:"Rahul"},{name:"Aman"}])
})

app.listen(5900) */
/* 
const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    res.json([{name:"Tushar",Rollno: 12},{name:"Aman",Rollno: 14}])
})
app.listen(5900) */

const express = require("express")
const app = express()

app.use(express.json())

const users = [
   { "name":"ssn","age": 23},{"name":"fvn","age":21},{"name":"mcb","age":29}
]
app.get("/",(req,res)=>{
    res.json(users)
})
app.get("/about",(req,res)=>{
res.send("This is my backend proiject")
})
app.post("/",(req,res)=>{
    users.push(req.body)
    res.json({message:"user added"})

})
app.listen(5900,()=>{
    console.log("server is running")
})
