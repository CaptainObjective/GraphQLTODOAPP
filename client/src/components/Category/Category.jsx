import React from "react";
import { Icon, InputBase } from "@material-ui/core";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";

import { categories } from "../AppBar/AppBar";
import useStyles from "./styles";

const updateCategory = gql`
  mutation($data: CategoryUpdateInput!, $where: CategoryWhereUniqueInput!) {
    updateCategory(data: $data, where: $where) {
      id
    }
  }
`;

const mutation = gql`
  mutation($where: CategoryWhereUniqueInput!) {
    deleteCategory(where: $where) {
      id
      name
    }
  }
`;

const Label = ({ name, id }) => {
  const classes = useStyles();

  const [isEdited, Edit] = React.useState(false);
  const [catName, setName] = React.useState(name);
  return (
    <Mutation
      mutation={updateCategory}
      variables={{
        data: {
          name: catName
        },
        where: {
          id: id
        }
      }}
    >
      {update => {
        return (
          <Mutation mutation={mutation}>
            {deleteCategory => {
              return (
                <span className={classes.root}>
                  {isEdited ? (
                    <InputBase
                      autoFocus
                      value={catName}
                      className={classes.input}
                      onChange={e => {
                        setName(e.target.value);
                      }}
                    />
                  ) : (
                    <span className={classes.margin}>{catName}</span>
                  )}
                  <Icon
                    className={classes.margin}
                    onClick={() => {
                      Edit(!isEdited);
                      isEdited && update();
                    }}
                  >
                    {isEdited ? `check_circle` : `create`}
                  </Icon>
                  <Icon
                    onClick={e => {
                      e.stopPropagation();
                      deleteCategory({
                        variables: { where: { id: id } },
                        refetchQueries: [{ query: categories }]
                      });
                    }}
                  >
                    delete
                  </Icon>
                </span>
              );
            }}
          </Mutation>
        );
      }}
    </Mutation>
  );
};

export default Label;
