const Todo = require("../database/models/todo.model")

//GET
exports.getAllTodo = function (req, res) {
  Todo.find({})
    .then(data => res.send(data))
    .catch((e) => console.error("Todo not found in todo controllers", e))
}

//POST
exports.addTodo = function (req, res) {
  const { name, details } = req.body
  const todo = new Todo({ name, details })
  todo.save()
    .then(
      () => res.send("todo Added")
    )
    .catch(e => console.error("Error while adding todo", e))
}
