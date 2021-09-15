const Todo = require("../database/models/todo.model")

//DELETE
exports.deleteOneTodo = function (req, res) {
  const { id } = req.params
  Todo.findByIdAndDelete(id).exec()
    .then(
      () => res.send("Todo deleted")
    )
    .catch(
      e => console.error("Error while deleting todo in todo controllers", e)
    )
}
//GET
exports.getAllTodo = function (req, res) {
  Todo.find({})
    .then(data => res.json(data))
    .catch((e) => console.error("Todos not found in todo controllers", e))
}

exports.getOneTodo = function (req, res) {
  const { id } = req.params
  Todo.findById(id).exec()
    .then(
      todo => res.json(todo)
    )
    .catch(e => console.error("Error while Finding one todo in todo controllers", e))
}
//POST
exports.addTodo = function (req, res) {
  const { name, details } = req.body
  if (!name || !details)
    return res.send("Name or details cannot be empty !")
  const todo = new Todo({ name, details })
  todo.save()
    .then(
      () => {
        return res.redirect("/")
      }
    )
    .catch(e => console.error("Error while adding todo", e))

}

// PUT
exports.updateTodo = function (req, res) {
  const { isDone, name, details } = req.body
  const { id } = req.params
  Todo.findByIdAndUpdate(id, { isDone, name, details }).exec()
    .then(
      () => res.send("Todo updated")
    )
    .catch(e => res.send("Error while updating todo in Todo controllers file", e))

}