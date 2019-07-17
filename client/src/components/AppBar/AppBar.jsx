import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

import useStyles from "./styles";
import { query as me } from "../App/App";
import Categories from "../Categories";
import AddCategory from "../Categories/AddCategory";

const mutation = gql`
  mutation {
    signOut {
      message
    }
  }
`;

export const categories = gql`
  {
    categories {
      name
      id
    }
  }
`;

const MyAppBar = ({ children }) => {
  const classes = useStyles();
  return (
    <Mutation mutation={mutation}>
      {logout => (
        <>
          <AppBar position="static">
            <Toolbar className={classes.root}>
              <Typography variant="h6">Kategorie:</Typography>
              <Query query={categories}>
                {({ data, loading, error }) => {
                  return (
                    <>
                      {!loading && <Categories data={data} />}
                      <AddCategory />
                    </>
                  );
                }}
              </Query>

              <Typography
                onClick={() => logout({ refetchQueries: [{ query: me }] })}
                variant="h6"
                className={classes.logout}
              >
                Wyloguj
              </Typography>
            </Toolbar>
          </AppBar>
          {children}
        </>
      )}
    </Mutation>
  );
};
export default MyAppBar;
