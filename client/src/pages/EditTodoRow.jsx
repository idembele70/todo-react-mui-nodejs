import { Button, Typography, makeStyles } from "@material-ui/core"
import React from "react"
import theme from "../theme"
import TodoForm from "../tools/TodoForm"

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
function EditTodoRow() {
  const classes = useStyles()
  return (
    <TodoForm putSpaceBetween>
      <Button
        className={`${classes.btn} ${classes.validateBtn}`}
        type="submit"
        variant="outlined"
      >
        <Typography variant="h5" className={classes.btnTypography}>
          Save
        </Typography>
      </Button>
      <Button className={`${classes.btn} ${classes.deleteBtn}`} type="submit">
        <Typography variant="h5" className={classes.btnTypography}>
          Delete
        </Typography>
      </Button>
    </TodoForm>
  )
}

export default EditTodoRow

