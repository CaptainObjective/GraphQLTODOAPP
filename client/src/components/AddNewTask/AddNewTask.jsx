import React from "react";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";

//mutacja musi odpytywac to co chce dostac

const add_task = gql`
  mutation {
    createTask(data: { title: "Tytuł" }) {
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
  const classes = styles();
  return (
    <Mutation mutation={add_task}>
      {(addTask, { data }) => (
        <Icon
          onClick={() => addTask()}
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
