import { Router } from "express";
let guestrouter = Router()

export default guestrouter

let hostname = "Sumeet"
guestrouter.get("/",(req,res)=>{
    res.send(`This is a server site of ${hostname}'s guests`)
})

let arr=["Goku","Gohan","Goten","Vegeta"]

guestrouter.get("/all",(req,res)=>{
    res.send(arr.map((e,index)=>{return (index+1)+"."+e}))
})

guestrouter.post("/addguest/:guestname",(req,res)=>{
    arr.push(req.params.guestname)
    res.send("Guest added successfully")
})

guestrouter.get("/guestcount",(req,res)=>{
    res.send(`Guest count = ${arr.length}`)
})

guestrouter.put("/changeguestname/:index/:guestname",(req,res)=>{
    let i = req.params.index
    let gname = req.params.guestname

    arr[i]=`${gname}`
    res.send("Guest name changed successfully")  
})

guestrouter.delete("/removeguest/:path",(req,res)=>{
    let n = req.params.path
    arr.splice(n,1)
    res.send("Guest removed successfully")
})