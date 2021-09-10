const { addTodo,getAllTodo } = require("../controlers/todo.controllers")

const router = require("express").Router()

//GET
router.get("/", getAllTodo)
//POST
 router.post("/new", addTodo)

module.exports = router
