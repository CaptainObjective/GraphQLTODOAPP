import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    padding: 0
  },
  icons: {
    width: "100%",
    display: "flex",
    marginTop: "2rem",
    justifyContent: "center"
  },
  priority: {
    width: "80%",
    display: "flex",
    justifyContent: "flex-start"
  },
  delete: {
    marginLeft: "auto"
  }
}));

export default useStyles;
