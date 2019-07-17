import React, { useContext } from "react";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";

import Store from "../App/Store";

//mutacja musi odpytywac to co chce dostac subskrypcji

const add_task = gql`
  mutation($data: TaskCreateInput!) {
    createTask(data: $data) {
      id
      title
      description
      fulltext
      completed
      priority
    }
  }
`;

const styles = makeStyles(theme => ({
  root: {
    cursor: "pointer",
    fontSize: "3rem",
    marginTop: "1rem"
  }
}));

const AddNewTask = () => {
  const { selectedCategory } = useContext(Store);
  const classes = styles();
  return (
    <Mutation mutation={add_task}>
      {(addTask, { data }) => (
        <Icon
          onClick={() =>
            addTask({
              variables: {
                data: {
                  title: "Tytuł",
                  category: { connect: { id: selectedCategory } }
                }
              }
            })
          }
          color="primary"
          className={classes.root}
        >
          add_circle
        </Icon>
      )}
    </Mutation>
  );
};

export default AddNewTask;
