/* eslint-disable no-console */
import { Button, Typography, makeStyles } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import theme from "../../theme"
import CenteredCircularProgress from "../../tools/CenteredCircularProgress"
import TodoForm from "../../tools/TodoForm"

const useStyles = makeStyles({
  btn: {
    marginTop: theme.spacing(4),
    width: 153,
    height: 60,
    textTransform: "capitalize",
    color: theme.palette.secondary.main
  },
  btnTypography: {
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: "28px"
  },
  deleteBtn: {
    "&:hover": {
      backgroundColor: theme.palette.red.light
    },
    backgroundColor: theme.palette.red.main
  },
  validateBtn: {
    "&:hover": {
      backgroundColor: theme.palette.primary.light
    },
    backgroundColor: theme.palette.primary.main
  }
})
function EditTodoRowForm() {
  const classes = useStyles()
  const [todo, setTodo] = useState([])
  const [loading, setLoading] = useState(true)
  const { id } = useParams()
  useEffect(() => {
    const controller = new AbortController()
    const { signal } = controller
    fetch(`/todo/${id}`, { signal })
      .then((res) => res.json())
      .then((data) => {
        setTodo(data)
        return setLoading(false)
      })
      .catch((e) => {
        if (e.name !== "AbortError")
          console.error(
            "Error while fetching one todo in EditTodoRow jsx file",
            e
          )
        setLoading(false)
      })
    return () => controller.abort()
  }, [id])
  const handleUpdate = ([name, details]) => {
    const body = JSON.stringify({
      name,
      details
    })
    fetch(`/todo/update/${id}`, {
      body,
      headers: { "content-type": "application/json" },
      method: "PUT",
    })
      .then(() => {
        window.location.href = "/"
      })
      .catch(
        (e) =>
          e.name !== "AbortError" &&
          console.error("Error while updating todo in EditTodoRow jsx file", e)
      )
  }
  const handleDelete = () => {
    fetch(`/todo/delete/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        window.location.href = "/"
      })
      .catch(
        (e) =>
          e.name !== "AbortError" &&
          console.error("Error while deleting todo in editTodoRow jsx file", e)
      )
  }
  if (loading) return <CenteredCircularProgress />
  return (
    <TodoForm putSpaceBetween onSubmit={handleUpdate} data={todo}>
      <Button
        className={`${classes.btn} ${classes.validateBtn}`}
        type="submit"
        variant="outlined"
        name="update"
      >
        <Typography variant="h5" className={classes.btnTypography}>
          Save
        </Typography>
      </Button>
      <Button
        className={`${classes.btn} ${classes.deleteBtn}`}
        onClick={handleDelete}
        type="reset"
      >
        <Typography variant="h5" className={classes.btnTypography}>
          Delete
        </Typography>
      </Button>
    </TodoForm>
  )
}

export default EditTodoRowForm
