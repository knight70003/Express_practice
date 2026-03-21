/* const express = require("express")
const app = express()

app.use(express.json())

let tasks= []

app.get("/",(req,res)=>{
    res.json(tasks)
})

app.post("/",(req,res)=>{
    tasks.push(req.body)      // tasks.push(req.body)
    res.json({message : "Task Added"})
})

app.delete("/:id",(req,res)=>{
    const id = req.params.id          // id = req.params.id
    tasks = tasks.filter(task => task.id != id)  // tasks = tasks.filter(task => task.id != id)

    res.json({message: "Task Deleted"})

})
app.put("/:id",(req,res)=>{
    const id = req.params.id

    tasks = tasks.map(task=>{
        if (task.id == id){
            return { ...task, ...req.body}
        }
        return task
    })
    res.json({message:"Task Updated"})
})

app.listen(6500,()=>{
    console.log("Running server")
}) */

const express = require("express")
const app = express()

app.use(express.json())

let tasks = []

app.get("/",(req,res)=>{
    res.json(tasks)
})

app.post("/",(req,res)=>{
    tasks.push(req.body)
    res.json(tasks)
})

app.delete("/:id",(req,res)=>{
    const id = req.params.id
    tasks = tasks.filter(task => tasks.id != id)
    res.json({message: "Task deleted"})
})

app.put("/:id",(req,res)=>{
    const id = req.params.id
    tasks = tasks.map(task=>{
        if (task.id == id){
            return {...task, ...req.body}
        }
        return task
    })
    res.json({message:"Task Updated"})
})

app.listen(6500,(req,res)=>{
    console.log("running server is really fast")
})