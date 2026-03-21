const express= require("express")
const app = express()

app.use(express.json())

let tasks =[]

app.get("/tasks",(req,res)=>{
    res.json(tasks)
})
app.post("/tasks",(req,res)=>{
    tasks.push(req.body)
    res.json({message:"Task added"})
    
})

app.delete("/tasks/:id",(req,res)=>{
    const id = req.params.id
    tasks= tasks.filter(task => task.id != id)

    res.json({message:"Task deleted"})
})
app.listen(2900,()=>{
    console.log("server is running")
})