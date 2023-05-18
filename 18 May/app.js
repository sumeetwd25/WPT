import express,{json} from 'express'

const app=express()
app.set('views','./views')
app.set('view engine','hbs')

app.use(json())

app.get("/ajax",(req,res)=>{
    res.render("testajax")
})

app.get("/ajaxjquery",(req,res)=>{
    res.render("testajaxjquery")
})

app.get("/message",(req,res)=>{
    res.send({message:"this is a simple ajax",sender:"prachi"})
})

app.post("/square",(req,res)=>{
    let v=req.body.num
    let sqr=v*v
    res.send({sqr})
})

app.listen(5000,()=>{
    console.log("App listening on port 5000")
})