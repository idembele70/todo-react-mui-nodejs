import {
  Box,
  Checkbox,
  FormControlLabel,
  makeStyles,
  Typography
} from "@material-ui/core"
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import React, {
  useEffect,
  useState
} from "react"
import PropTypes from "prop-types"

const useStyles = makeStyles({
  checkbox: {
    margin: 0
  },
  details: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    width: 148
  },
  title: {
    margin: "0 0 9px 0"
  }
})
export default function TodoRow({ todo }) {
  const classes = useStyles()
  const { details, _id: id, isDone, name } = todo
  const [done, setDone] = useState(isDone)
  const handleEdit = () => {
    window.location.href = `/editTodoRow/${id}`
  }
  const controller = new AbortController()
  const { signal } = controller

  const setDoneHandler = () => {
    setDone(!done)
    const body = JSON.stringify({ ...todo, isDone: !done })
    fetch(`/todo/update/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body,
      signal
    }).then(
      () => console.log("Todo Update succesfull")
    )
      .catch(e => console.error("Error while fetching method put todo in TodoRow jsx file :", e))
  }

  useEffect(() => () => {
    console.log("Unmount")  
    controller.abort()
  }
    , [])
  return (
    <Box
      display="flex"
      alignItems="center"
      width={350}
      height={100}
      borderBottom="1px solid #90B4CE"
    >
      <FormControlLabel
        className={classes.checkbox}
        control={
          <Checkbox
            icon={<CheckCircleOutlineIcon fontSize="large" color="primary" />}
            checkedIcon={<CheckCircleIcon fontSize="large" color="primary" />}
            name="todoIcon"
            checked={done}
            onChange={setDoneHandler}
          />
        }
      />
      <Box
        pl="29px"
        pr="41px"
        width="calc(100% - 90px)"
        style={{ cursor: "pointer" }}
        onClick={handleEdit}
      >
        <Typography variant="h5" className={classes.title}>
          {name}
        </Typography>
        <Typography className={classes.details} variant="body1">
          {details}
        </Typography>
      </Box>
    </Box>
  )
}

TodoRow.propTypes = {
  todo: PropTypes.instanceOf(Object).isRequired
}