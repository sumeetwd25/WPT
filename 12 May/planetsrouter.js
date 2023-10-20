import { Router } from "express";
let planetsrouter = Router()

export default planetsrouter

planetsrouter.get("/",(req,res)=>{
    res.send("Hi, we are on planet Earth")
})

let planets=["Mercury","Venus","Earth","Mars"]

planetsrouter.get("/all",(req,res)=>{
    res.send(planets)
})

planetsrouter.post("/add/:planetname",(req,res)=>{
    planets.push(req.params.planetname)
    res.send("Planet added successfully")
})