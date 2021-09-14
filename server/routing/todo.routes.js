const { addTodo, getAllTodo, updateTodo } = require("../controlers/todo.controllers")

const router = require("express").Router()

//GET
router.get("/", getAllTodo)
//POST
router.post("/new", addTodo)
//PUT
router.put("/update/:id", updateTodo)
module.exports = router
