import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../Home";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Route exact path="/" component={Home} />;
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
