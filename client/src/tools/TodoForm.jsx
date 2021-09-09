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
import PropTypes from "prop-types"
import React from "react"
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
function TodoForm({ children, putSpaceBetween }) {
  const classes = useStyles()
  return (
    <Grid
      container
      alignItems="center"
      direction="column"
      className="container"
    >
      <form>
        <Grid item xs={12} className={classes.rootItem}>
          <FormControl>
            <InputLabel shrink htmlFor="name">
              <Typography variant="h5" className={classes.label}>
                Name
              </Typography>
            </InputLabel>
            <CustomizedInput placeholder="Enter the name" />
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
              placeholder="Enter the details"
              multiline
              minRows={11}
            />
          </FormControl>
        </Grid>
        <Grid
          item
          container
          xs={12}
          justify={putSpaceBetween ? "space-between" : "center"}
        >
          {children}
        </Grid>
      </form>
    </Grid>
  )
}

TodoForm.propTypes = {
  children: PropTypes.string.isRequired,
  putSpaceBetween: PropTypes.bool
}
TodoForm.defaultProps = {
  putSpaceBetween: false
}

export default TodoForm
