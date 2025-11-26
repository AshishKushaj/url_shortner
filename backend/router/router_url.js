const express= require('express')
const {
  shortenTheUrl,
  redirectToRealUrl,
} = require("../controller/routes_controller");
const router = express.Router()

router.post("/", shortenTheUrl);

router.get("/:id", redirectToRealUrl);

module.exports={router}