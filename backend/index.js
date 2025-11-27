const express = require('express')
const app= express()
const {connectDB} = require("./model/config");
const {router} = require('./router/router_url')
const cors = require("cors");


app.use(express.json())
app.use(cors());
require("dotenv").config();

app.use('/',router)


app.listen(8000,()=>{
    console.log("listing on 8000")
})


const connectToDB=async ()=>{
    await connectDB()
}
connectToDB();

