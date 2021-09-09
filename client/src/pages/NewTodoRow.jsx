import { makeStyles } from "@material-ui/core";
import React from "react";
import NewTodoForm from "../components/NewTodoRow/NewTodoForm";

const useStyles = makeStyles({
  root: {

  }
})
export default function NewTodoRow() {
  const classes = useStyles()
  return <>
    <NewTodoForm />
  </>
};
