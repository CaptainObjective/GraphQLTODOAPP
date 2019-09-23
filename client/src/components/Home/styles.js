import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    // display: "flex",
    // flexWrap: "wrap",
    // alignContent: "flex-start",
    // marginTop: "2rem"
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
    gridTemplateRows: "repeat(auto-fit, minmax(200px, 1fr))",
    // gridTemplateRows: "200px",
    marginTop: "2rem"
  }
}));

// display: "grid",
// gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
// marginTop: "2rem"

export default useStyles;
