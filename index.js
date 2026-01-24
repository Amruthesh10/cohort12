const express=require("express")
const app=express()//server ka instance create 

app.get("/home",(req,res)=>{
    res.send("Iam home")
})
app.get("/",(req,res)=>{
    res.send("hi the")
})
app.listen(3000) //server start on port 3000