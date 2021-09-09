import { Grid, makeStyles } from "@material-ui/core"
import React from "react"
import TodosContainer from "../components/TodoList/TodosContainer"
import "../index.css"

const useStyles = makeStyles({
  main: {
    height: "calc(100% - 154px)"
  }
})
export default function Todolist() {
  const classes = useStyles()
  return (
    <>
      <Grid className="container">
        <Grid item className={classes.main} xs={12}>
          <TodosContainer />
        </Grid>
      </Grid>
    </>
  )
}
