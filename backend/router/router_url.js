const express= require('express')
const { shortenTheUrl } = require("../controller/routes_controller");
const router = express.Router()

router.post("/", shortenTheUrl);


module.exports={router}