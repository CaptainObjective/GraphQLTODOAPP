import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap"
  },
  main: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    padding: "0.5rem"
  },
  task: {
    width: "80%",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column"
  },
  title: {
    minWidth: "40%"
  },
  descriptionInput: {
    fontSize: ".8rem"
  },
  iconholder: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    fontSize: "2.5rem",
    "&:hover": {
      cursor: "pointer"
    }
  },
  expandicon: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    fontSize: "1.5rem"
  }
}));

export default useStyles;
