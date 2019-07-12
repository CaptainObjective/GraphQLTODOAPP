import React from "react";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: ({ color, selected, isDone }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    color: selected ? color : "black",
    transition: ".5s",
    "&:hover": !isDone
      ? {
          cursor: "pointer",
          color: color,
          transform: "scale(1.3)"
        }
      : {
          cursor: "default",
          color: selected ? color : "black",
          transform: "scale(1)"
        }
  })
}));
const MyIcon = ({ icon, size, color, caption, selected, isDone, onClick }) => {
  const classes = useStyles({ color, selected, isDone });
  return (
    <div onClick={onClick} className={classes.root}>
      <div style={{ width: "100%", textAlign: "center" }}>
        <Icon style={{ fontSize: size }}>{icon}</Icon>
      </div>
      <Typography>{caption}</Typography>
    </div>
  );
};
MyIcon.defaultProps = {
  color: "black"
};
export default MyIcon;
