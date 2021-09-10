const router = require("express").Router()
const todoRouter = require("./todo.routes.js")

router.use("/todo",todoRouter)

module.exports = router