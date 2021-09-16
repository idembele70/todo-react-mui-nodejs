const express = require('express');
const app = express();
const router = require("./routing")
const { resolve } = require("path")
require("./database")
app.get("/", (req, res) => {
  res.send("home page")
})
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

if (process.env.NODE_ENV === "production") {
  app.use(express.static(resolve("client", "build")));
  app.get("*", (req, res) => {
    req.sendFile(resolve("client", "build", "index.html"))
  })
}
app.listen(process.env.port || 4000)
app.use(router)

module.exports = app
