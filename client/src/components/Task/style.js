import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "80%",
    padding: 0
  },
  panelSummary: {
    backgroundColor: "inherit",
    "&$focused": {
      backgroundColor: "inherit"
    }
  },
  focused: {}
}));

export const mapColor = (priority, isDone) => {
  let color;
  switch (priority) {
    case "high":
      color = "red";
      break;
    case "medium":
      color = "orange";
      break;
    case "low":
      color = "grey";
      break;
    default:
      color = "black";
  }
  return isDone ? "green" : color;
};

export default useStyles;
