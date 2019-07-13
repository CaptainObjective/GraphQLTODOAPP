import React from "react";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(theme => ({
  root: {
    fontSize: "3rem",
    marginTop: "1rem"
  }
}));

const AddNewTask = () => {
  const classes = styles();
  return (
    <Icon color="primary" className={classes.root}>
      add_circle
    </Icon>
  );
};

export default AddNewTask;
