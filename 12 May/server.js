import express from "express"
import guestrouter from "./guestrouter.js"
import productrouter from "./productrouter.js"

let app = express()
app.use(express.json())

app.use("/atithi",guestrouter)
app.use("/product",productrouter)

app.listen(9000,()=>{
    console.log("server listening on port 9000")
})

