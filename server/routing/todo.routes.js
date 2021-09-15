const { addTodo, getAllTodo, updateTodo, getOneTodo, deleteOneTodo } = require("../controlers/todo.controllers")

const router = require("express").Router()

//DELETE
router.delete("/delete/:id", deleteOneTodo)

//GET
router.get("/", getAllTodo)
router.get("/:id", getOneTodo)

//POST
router.post("/new", addTodo)

//PUT
router.put("/update/:id", updateTodo)
module.exports = router
