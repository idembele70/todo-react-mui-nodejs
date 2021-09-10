import {
  alpha,
  FormControl,
  Grid,
  InputBase,
  InputLabel,
  makeStyles,
  Typography,
  withStyles
} from "@material-ui/core"
import PropTypes, { object } from "prop-types"
import React, { useState } from "react"
import theme from "../theme"

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
  label: {
    color: theme.palette.marine.main,
    lineHeight: "28px"
  },
  rootItem: {
    maxWidth: 328,
    margin: "auto"
  }
})
function TodoForm({ children, onSubmit, putSpaceBetween, }) {
  const classes = useStyles()
  const [name, setName] = useState("")
  const [details, setDetails] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit([name, details])
  }
  

  const handleChangeValue = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value)
        setError("")
        break
      case "details":
        setDetails(e.target.value)
        setError("")
        break
      default:
        console.error("invalid Name")
        break
    }
  }

  return (
    <Grid
      container
      alignItems="center"
      direction="column"
      className="container"
    >
      <form onSubmit={handleSubmit}>
        <Grid item xs={12} className={classes.rootItem}>
          <FormControl>
            <InputLabel shrink htmlFor="name">
              <Typography variant="h5" className={classes.label}>
                Name
              </Typography>
            </InputLabel>
            <CustomizedInput
              id="name"
              name="name"
              onChange={handleChangeValue}
              placeholder="Enter the name"
              value={name}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} className={classes.rootItem}>
          <FormControl style={{ marginTop: 32 }}>
            <InputLabel shrink htmlFor="details">
              <Typography variant="h5" className={classes.label}>
                Details
              </Typography>
            </InputLabel>
            <CustomizedInput
              id="details"
              name="details"
              onChange={handleChangeValue}
              multiline
              minRows={11}
              placeholder="Enter the details"
              value={details}
            />
          </FormControl>
        </Grid>
        {error && (
          <Grid item xs={12}>
            {error}
          </Grid>
        )}
        <Grid
          item
          container
          xs={12}
          justifyContent={putSpaceBetween ? "space-between" : "center"}
        >
          {children}
        </Grid>
      </form>
    </Grid>
  )
}

TodoForm.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
  onSubmit: PropTypes.func.isRequired,
  putSpaceBetween: PropTypes.bool
}
TodoForm.defaultProps = {
  putSpaceBetween: false
}

export default TodoForm
