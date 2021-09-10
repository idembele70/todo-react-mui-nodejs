const express = require('express');
const app = express();
const router = require("./routing")
require("./database")
app.get("/", (req,res)=>{
  res.send("home page")
})
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.listen(4000)
app.use(router)

module.exports = app