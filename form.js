import express from  'express'
const app = express();

app.get("/",(req,res)=>{
    res.send("<h1>Home page</h1>");
})
app.get("/login",(req,res)=>{
    res.send(`<form action ="/submit" method ="post">
        </form>`)
})
app.listen(4333)
