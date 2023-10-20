import express from 'express'
let app = express()
import planetsrouter from './planetsrouter.js'

app.listen(2000,()=>{
    console.log("The server runs on port 2000")
})

app.use("/planets",planetsrouter)

