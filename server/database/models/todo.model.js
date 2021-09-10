const {Schema, model} = require("mongoose")

const todoSchema = Schema({
  name : String,
  details :String
})

const Todo = model("todos", todoSchema)
module.exports = Todo
