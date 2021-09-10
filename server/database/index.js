const mongoose = require('mongoose')
const {
  db: { protocol, user, password, host, name, options }
} = require("../environment/development")


mongoose.connect(`${protocol}://${user}:${password}@${host}/${name}?${options}`)
  .then(() => console.log("Connected to db."))
  .catch((e)=>console.error("Connection to DB failed in Database Index file", e))
