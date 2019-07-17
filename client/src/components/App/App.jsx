import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import { StoreProvider } from "./Store";
import Home from "../Home";
import Login from "../Login";
import AppBar from "../AppBar";
import theme from "./theme";
import client from "./client";

export const query = gql`
  {
    me {
      id
    }
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StoreProvider>
        <ApolloProvider client={client}>
          <Query query={query}>
            {({ data, loading, error }) => {
              if (loading) return <p>Loading...</p>;
              if (!data.me && window.location.pathname !== "/login")
                return <Redirect to="/login" />;
              if (data.me && window.location.pathname !== "/")
                return <Redirect to="/" />;
              return (
                <Switch>
                  <Route path="/login" component={Login} />
                  <AppBar>
                    <Route path="/" component={Home} />
                  </AppBar>
                </Switch>
              );
            }}
          </Query>
        </ApolloProvider>
      </StoreProvider>
    </ThemeProvider>
  );
};

export default withRouter(App);
