import { Box, Button, Grid, makeStyles } from "@material-ui/core"
import React, { useState, useEffect } from "react"
import AddIcon from "@material-ui/icons/Add"
import theme from "../../theme"
import TodoRow from "./TodoRow"

const useStyles = makeStyles({
  root: {
    height: 492,
    width: "100%",
    overflow: "auto",
    position: "relative"
  },
  addBtn: {
    borderRadius: 50,
    height: 64,
    boxShadow: "0px 4px 4px rgba(9, 64, 103, 0.47)",
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.light
    }
  },
  addIcon: {
    fontSize: 48
  }
})

export default function TodosContainer() {
  const classes = useStyles()
  const [todos, setTodos] = useState([])
  useEffect(() => {
    fetch("/todo").then(
      res => res.json()
    ).then(setTodos)
      .catch(e => console.error("Error while fetching all Todos in TodoContainer jsx file", e))
  }, [])
  return (
    <Grid container justifyContent="center" alignItems="flex-start" className={classes.root}>
      {todos.length ?
        todos.map(
          todo => {
            const { _id: id } = todo
            return <Grid item xs={12} key={id}>
              <TodoRow todo={todo} />
            </Grid>
          }
        ) : "There is no Todo in the DB !"}
      <Box
        bottom={100}
        position="sticky"
        width={64}
        style={{
          transform :"translateX(120px)"
        }}
      >
        <Button className={classes.addBtn} href="/newTodoRow" color="secondary">
          <AddIcon className={classes.addIcon} />
        </Button>
      </Box>
    </Grid>
  )
}
