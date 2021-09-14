const Todo = require("../database/models/todo.model")

//GET
exports.getAllTodo = function (req, res) {
  Todo.find({})
    .then(data => res.json(data))
    .catch((e) => console.error("Todo not found in todo controllers", e))
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
exports.updateTodo = async function (req, res) {
  const { isDone } = req.body
  const { id } = req.params
    await Todo.findByIdAndUpdate(id, { isDone }).exec()
    .then(
      ()=>res.end("done !")
    )
    .catch(e=>res.send("Error while updating todo in Todo controllers file", e))

}