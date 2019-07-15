import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh"
  },
  paper: {
    width: "70%"
  },
  form: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    // width: "100%",
    margin: "3rem"
  },
  title: {
    textDecoration: "bold",
    fontWeight: 900,
    userSelect: "none"
  },
  buttons: {
    marginTop: "1rem",
    display: "flex",
    justifyContent: "space-between",
    width: "100%"
  }
}));

export default useStyles;
