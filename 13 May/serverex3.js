import express from "express";
let app = express()
app.set('views', './views');
app.set('view engine', 'hbs');
import bodyParser from 'body-parser'                //for post method
app.use(bodyParser.urlencoded({extended:true}))


app.listen(2500,()=>{
    console.log("Server runs on port 2500")
})




app.get("/hello",(req,res)=>{
    res.sendFile("C:\\Users\\Admin\\Documents\\WPT\\13 May\\test.html")
})

app.get("/verify",(req,res)=>{
    let user=req.query.uname
    let pwd=req.query.password

    if(user=="iet" && pwd=="123")
        res.render("welcome",{username:user})
})




app.get("/calculator",(req,res)=>{
    res.render("calc")
})

app.post("/docalculation",(req,res)=>{
    let n1 = req.body.num1
    let n2 = req.body.num2
    //console.log("server gets",n1,n2)
    let sum = parseInt(n1) + parseInt(n2)
    res.render("calc",{result:sum})
})




app.get("/maths",(req,res)=>{
    res.render("mathstable")
})

app.post("/generate-table",(req,res)=>{
    let n1 = req.body.num1
    let arr = []
    for(var i=1; i<=10; i++){
        arr[i] = `${n1}*${i}=${n1*i}`
    }
    res.render("mathstable",{rowdata:arr})
})




app.get("/login",(req,res)=>{
    res.render("login")
})