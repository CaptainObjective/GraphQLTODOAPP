import React from "react";
import { Icon } from "@material-ui/core";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";

import { categories } from "../AppBar/AppBar";

const newcategory = gql`
  mutation {
    createCategory(
      data: { name: "Nowa kategoria", user: { connect: { id: "placeholder" } } }
    ) {
      id
    }
  }
`;

const AddCategory = () => {
  return (
    <Mutation mutation={newcategory}>
      {add => (
        <Icon onClick={() => add({ refetchQueries: [{ query: categories }] })}>
          add_circle
        </Icon>
      )}
    </Mutation>
  );
};

export default AddCategory;
