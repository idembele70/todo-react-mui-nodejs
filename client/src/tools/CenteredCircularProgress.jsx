import { Box, CircularProgress, makeStyles } from "@material-ui/core"
import React from "react"

const useStyles = makeStyles({
  circularProgressContainer: {
    position: "fixed",
    top: "40%",
    left: "50%",
    transform: "translateX(-50%)"
  }
})
function CenteredCircularProgress() {
  const classes = useStyles()
  return (
    <Box className={classes.circularProgressContainer}>
      <CircularProgress color="primary" />
    </Box>
  )
}

export default CenteredCircularProgress
