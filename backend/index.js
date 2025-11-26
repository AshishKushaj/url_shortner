const express = require('express')
const app= express()
const {connectDB} = require("./model/config");
const {router} = require('./router/router_url')

app.use(express.json())
require("dotenv").config();
app.use('/',router)

app.listen(8000,()=>{
    console.log("listing on 8000")
})


const connectToDB=async ()=>{
    await connectDB()
}
connectToDB();

