import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "../Home";
import AppBar from "../AppBar";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar />
      <BrowserRouter>
        <Route exact path="/" component={Home} />;
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
