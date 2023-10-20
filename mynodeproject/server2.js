import express from 'express'
let app=express()

import planetsrouter from './planetsrouter.js'
app.use("/",planetsrouter)
app.use("/planet",planetsrouter)
app.use("/add/:planetname",planetsrouter)

app.get("/",(req,res)=>{

   return res.send("Hello")
})


app.listen(2000,()=>{
    console.log("server runs on port no 2000")
})


