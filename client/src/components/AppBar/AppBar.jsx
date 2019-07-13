import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import useStyles from "./styles";

const MyAppBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.root}>
        <Typography variant="h6">Kategorie</Typography>
        <Typography variant="h6" className={classes.logout}>
          Wyloguj
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default MyAppBar;
