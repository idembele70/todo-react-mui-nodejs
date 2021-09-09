import React from "react"
import {
  Button,
  FormControl,
  Grid,
  Input,
  makeStyles,
  Typography,
  Box
} from "@material-ui/core"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"

const useStyles = makeStyles((theme) => ({
  root: {
    width: 375,
    height: "23%",
    maxHeight: 154,
    backgroundColor: theme.palette.info.main,
    padding: "24px 12px 48px",
    position: "relative"
  },
  BackIosIcons: {
    cursor: "pointer"
  },
  searchBarForm: {
    width: 350,
    display: "inline-block",
    height: 40,

    "& > *": {
      maxHeight: 40,
      height: 40
    }
  },
  searchBarInput: {
    width: 250,
    backgroundColor: "rgba(255, 255, 255, 0.22)",
    borderRadius: "50px 0 0 50px",
    padding: "0 48px 0 30px",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "24px",
    color: theme.palette.secondary.light,
    "&::before, &::after": {
      display: "none"
    }
  },
  searchBarBtn: {
    width: 100,
    padding: 0,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "0 50px 50px 0",
    verticalAlign: "top",
    lineHeight: "unset",
    color: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    }
  }
}))
export default function Header() {
  const classes = useStyles()
  const isHomeLocation = window.location.href.split("/").slice(-1)[0] === ""
  const handleGoToHome = () => {
    window.location.href = "/"
  }

  return (
    <Grid container className={classes.root}>
      <Grid item container justifyContent="center">
        <Typography variant="h5" color="secondary">
          TodoRama
        </Typography>
      </Grid>
      {isHomeLocation && (
        <Grid item className={classes.searchBar}>
          <form>
            <FormControl className={classes.searchBarForm}>
              <Input placeholder="Search" className={classes.searchBarInput} />
              <Button className={classes.searchBarBtn}>Search</Button>
            </FormControl>
          </form>
        </Grid>
      )}
      <Box
        width="100%"
        height={26}
        position="absolute"
        bottom={-1}
        bgcolor="secondary.main"
        left={0}
        borderRadius="50px 50px 0 0"
      />
      {!isHomeLocation && (
        <Box position="absolute" top={25} left={17}>
          <ArrowBackIosIcon
            color="secondary"
            fontSize="large"
            onClick={handleGoToHome}
            className={classes.BackIosIcons}
          />
        </Box>
      )}
    </Grid>
  )
}
