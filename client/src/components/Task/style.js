import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: "400px",
    padding: 0,
    gridRow: isExpanded => (isExpanded ? "span 2" : "span 1"),
    margin: "1rem"
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
