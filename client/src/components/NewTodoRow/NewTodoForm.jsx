import {
  alpha, Button, Grid,
  InputBase, makeStyles,
  Typography, withStyles
} from "@material-ui/core"
import React, { useState } from "react"
import theme from "../../theme"
import TodoForm from "../../tools/TodoForm"

const CustomizedInput = withStyles({
  root: {
    "label + &": {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    "&:focus": {
      borderColor: theme.palette.primary.main,
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`
    },
    border: "1px solid #094067",
    borderRadius: 5,
    color: theme.palette.text.primary,
    fontFamily: [
      "Roboto",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    marginTop: theme.spacing(2),
    padding: 7,
    position: "relative",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    height: 24,
    width: 312
  }
})(InputBase)

const useStyles = makeStyles({
  validateBtn: {
    "&:hover": {
      backgroundColor: theme.palette.primary.light
    },
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    marginTop: theme.spacing(4),
    width: 328,
    height: 60,
    textTransform: "capitalize"
  },
  validateTextContent: {
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: "28px"
  }
})
function NewTodoForm() {
  const classes = useStyles()
  const [error, setError] = useState("")
  // functions
  const handleAddTodo = ([name, details]) => {
    const body = JSON.stringify({ name, details })

    fetch("/todo/new", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body
    }).then(
      (res) => {
        if (res.redirected){
          window.location.href = res.url
         return setError("")
        }
        return res.text().then(
          errorMessage=>setError(errorMessage)
        )
      }
    )
      .catch(e => console.error("error while post fetching todo newTodoFrom jsx file", e))
  }
  return (
    <TodoForm onSubmit={handleAddTodo} error={error}>
      <Grid item xs={12}>
        <Button
          className={classes.validateBtn}
          type="submit"
          variant="outlined"
        >
          <Typography variant="h5" onClick={handleAddTodo} className={classes.validateTextContent}>
            Save
          </Typography>
        </Button>
      </Grid>
    </TodoForm>
  )
}

export default NewTodoForm
