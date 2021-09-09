import {
  Box,
  Checkbox,
  FormControlLabel,
  makeStyles,
  Typography
} from "@material-ui/core"
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import React from "react"

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
export default function TodoRow() {
  const classes = useStyles()
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
          />
        }
      />
      <Box pl="29px" pr="41px" width="calc(100% - 90px)">
        <Typography variant="h5" className={classes.title}>
          Shopping
        </Typography>
        <Typography className={classes.details} variant="body1">
          Milk, Eggs, Juice, sugar
        </Typography>
      </Box>
    </Box>
  )
}
