import express from 'express'

let app=express()

app.get('/',(request,response)=>{
    return response.send("hi");
});

app.get("/kyaboltatu",(req,res)=>{
    return res.send("Lai bhari")
})

app.post("/postit",(req,res)=>{
    res.send("POST method received your request")
})

app.put("/putit",(req,res)=>{
    res.send("PUT method received your request")
})

app.delete("/delit",(req,res)=>{
    res.send("DELETE method received your request")
})

app.post("/login",(req,res)=>{
    let user = req.query.uname
    let pwd = req.query.password

    if(user=="iet" && pwd=="123")
        res.send(`Welcome ${user}`)
    
    else
        res.send("Wrong credentials")
})

app.get("/factorial/:num",(req,res)=>{

console.log("factorial is called")

let n=req.params.num
let fact=1
for(let i=1;i<=n;i++)
{
fact=fact*i
}

res.send(`the factorial of ${n} is ${fact}`)

})



app.use(express.json())
app.delete("/should_we_throw",(req,res)=>{
 

    let pname=req.body.productname
    let datestr=req.body.dateofexpiry
    let d=new Date(datestr)
    let today=new Date()

    if(today > d){
        res.send("throw it,already expired")
    }
    else{
        res.send("you can use it")
    }

})

app.listen(5005,()=>{

console.log("listen")
})