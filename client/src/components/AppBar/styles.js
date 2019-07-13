import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    userSelect: "none",
    cursor: "pointer"
  },
  logout: {
    marginLeft: "auto"
  }
}));

export default useStyles;
