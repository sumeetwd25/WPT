import { Router } from "express";
let productrouter = Router()

export default productrouter

let products=[]

// {
//     "productId" :1,
//     "productName" : "AAA",
//     "costPerUnit": 30,
//     "units": 2
//  }

productrouter.post("/add",(req,res)=>{

    let obj=req.body
    products.push(obj)

    res.send("Product added successfully")
})


productrouter.get("/getInfo",(req,res)=>{
    let _id = req.query.id


    if(products.length===0)
    {
        res.send("Product not found")
    }
    else{
        for(let i=0; i<products.length; i++){

            if(_id==products[i].productId){
                res.send(products[i])
            }
        }
        res.send("Product not found")
    }

})


productrouter.get("/all",(req,res)=>{
    res.send(products)
})


productrouter.put("/changecost/:productid/:productcost",(req,res)=>{
    let pid = req.params.productid
    let pcost = req.params.productcost

    if(products.length===0){
        res.send("Product not found")
    }
    else{
        for(let i=0; i<products.length; i++){

            if(pid==products[i].productId){
                products[i].costPerUnit=pcost
                res.send("Product cost changed successfully")
            }
        }
        res.send("Product not found")

    }   
})


productrouter.delete("/remove/:productid",(req,res)=>{
    let pid=req.params.productid

    if(products.length===0){
        res.send("Product not found")
    }
    else{
        for(let i=0; i<products.length; i++){

            if(pid==products[i].productId){
                products.splice(i,1)
                res.send("Product removed successfully")
            }
           
        }
        res.send("Product not found")

    }    
})