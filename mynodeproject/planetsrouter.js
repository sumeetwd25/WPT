import {Router} from "express"
let planetsrouter=Router()

export default planetsrouter

let planet=["earth","venus","jupiter","mars"]

planetsrouter.get("/",(req,res)=>{
res.send("hi we are on planet earth")
})

planetsrouter.get("/planet",(req,res)=>{
    res.send(planet)
    })

planetsrouter.post("/add/:planetname",(req,res)=>{
    planet.push(req.params.planetname)
    res.send("planet added successfully")
})