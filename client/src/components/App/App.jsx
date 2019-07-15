import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";

import Home from "../Home";
import AppBar from "../AppBar";
import theme from "./theme";
import client from "./client";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ApolloProvider client={client}>
        <AppBar />
        <BrowserRouter>
          <Route exact path="/" component={Home} />;
        </BrowserRouter>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
