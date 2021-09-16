import {
  Box,
  Button,
  CircularProgress,
  Grid,
  makeStyles,
  Typography
} from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"
import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import theme from "../../theme"
import TodoRow from "./TodoRow"
import CenteredCircularProgress from "../../tools/CenteredCircularProgress"

const useStyles = makeStyles({
  root: {
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
    "&:hover": {
      backgroundColor: theme.palette.primary.light
    }
  },
  addIcon: {
    fontSize: 48
  },

  noTodoText: {
    paddingTop: theme.spacing(8),
    textAlign: "center",
    color: theme.palette.primary.main
  }
})

export default function TodosContainer({ searchTerm }) {
  const classes = useStyles()
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    const controller = new AbortController()
    const { signal } = controller
    fetch("https://todo-react-nodejs.herokuapp.com/todo", { signal })
      .then((res) => res.json())
      .then(async (data) => {
        await setTodos(
          data.filter(
            (td) =>
              (searchTerm && td.name.match(new RegExp(searchTerm, "ig"))) ||
              !searchTerm
          )
        )
        setLoading(false)
      })
      .catch((e) => {
        // eslint-disable-next-line no-console
        if (e.name !== "AbortError")
          console.error(
            "Error while fetching all Todos in TodoContainer jsx file",
            e
          )
        setLoading(false)
      })
    return () => controller.abort()
  }, [searchTerm, todos.length])
  if (loading) return <CenteredCircularProgress />
  return (
    <Grid container justifyContent="flex-start" className={classes.root}>
      {todos.length
        ? todos.map((todo) => {
          const { _id: id } = todo
          return (
            <Grid item xs={12} style={{ maxHeight: 101 }} key={id}>
              <TodoRow todo={todo} />
            </Grid>
          )
        })
        : !loading && (
          <Typography variant="h4" className={classes.noTodoText}>
            There is no todo found in the DB !
          </Typography>
        )}

      {!loading && (
        <Box
          top={500}
          position="fixed"
          width={64}
          style={{
            transform: "translateX(280px)"
          }}
        >
          <Button
            className={classes.addBtn}
            href="/todo/client/new"
            color="secondary"
          >
            <AddIcon className={classes.addIcon} />
          </Button>
        </Box>
      )}
    </Grid>
  )
}
TodosContainer.propTypes = {
  searchTerm: PropTypes.string
}
TodosContainer.defaultProps = {
  searchTerm: ""
}
