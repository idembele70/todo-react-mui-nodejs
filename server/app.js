const express = require('express');
const { resolve, join } = require("path")
const app = express();
const router = require("./routing")
require("./database")
const port = process.env.PORT || 4000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
if (process.env.NODE_ENV === "production") {
  app.use(router)
  app.use(express.static(resolve(__dirname, "build")));
  app.get("/todo/client/*", (req, res) => {
    res.sendFile(resolve(__dirname, "build", "index.html"))
  })
}
app.listen(port, (err) => {
  if (err) console.error(err);
  console.log(`Listenning on port ${port}`);
})

module.exports = app
