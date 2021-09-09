import { Box, Button, Grid, makeStyles } from "@material-ui/core"
import React from "react"
import AddIcon from "@material-ui/icons/Add"
import theme from "../../theme"
import TodoRow from "./TodoRow"

const useStyles = makeStyles({
  root: {
    height: "73%",
    maxHeight: 492,
    width: "100%",
    overflow: "auto",
    position: "relative"
  },
  addBtn: {
    borderRadius: 50,
    height: 64,
    boxShadow: "0px 4px 4px rgba(9, 64, 103, 0.47)",
    backgroundColor: theme.palette.primary.main,
    zIndex: 2,
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
  return (
    <Grid container justifyContent="center" className={classes.root} xs>
      <Grid item>
        <TodoRow />
        <TodoRow />
        <TodoRow />
        <TodoRow />
        <TodoRow />
        <TodoRow />
        <TodoRow />
      </Grid>
      <Box
        position="sticky"
        bottom={100}
        display="flex"
        justifyContent="flex-end"
        width="90%"
      >
        <Button className={classes.addBtn} href="/newTodoRow" color="secondary">
          <AddIcon className={classes.addIcon} />
        </Button>
      </Box>
    </Grid>
  )
}
