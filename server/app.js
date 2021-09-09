const express = require('express');

const app = express();

app.get("/",(req,res)=>{
  res.json({home : "homePage !"})
})
app.listen(4000)

module.exports = app