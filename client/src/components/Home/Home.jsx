import React, { useContext } from "react";
import Container from "@material-ui/core/Container";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import Store from "../App/Store";
import Task from "../Task";
import AddNewTask from "../AddNewTask";
import useStyles from "./styles";

const query = gql`
  query($where: TaskWhereInput) {
    tasks(where: $where) {
      id
      title
      description
      fulltext
      completed
      priority
    }
  }
`;

const subscription = gql`
  subscription {
    taskCreated {
      id
      title
      description
      fulltext
      completed
      priority
    }
  }
`;

const deleteSubscription = gql`
  subscription {
    taskDeleted {
      id
    }
  }
`;

const Home = () => {
  const { selectedCategory } = useContext(Store);
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth="xl">
      <Query
        query={query}
        variables={{ where: { category: { id: selectedCategory } } }}
      >
        {({ data, loading, error, subscribeToMore }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          const tasks = data ? data.tasks : [];
          subscribeToMore({
            document: subscription,
            updateQuery: (prev, { subscriptionData }) => {
              if (!subscriptionData.data) return prev;

              const task = subscriptionData.data.taskCreated;
              if (prev.tasks[prev.tasks.length - 1].id === task.id) return prev;

              return Object.assign({}, prev, {
                tasks: [...prev.tasks, task]
              });
            }
          });
          subscribeToMore({
            document: deleteSubscription,
            updateQuery: (prev, { subscriptionData }) => {
              if (!subscriptionData.data) return prev;

              const deleted = subscriptionData.data.taskDeleted.id;
              const newTasks = tasks.filter(task => !(task.id === deleted));
              return Object.assign({}, prev, {
                tasks: [...newTasks]
              });
            }
          });

          return tasks.map(
            ({ id, title, description, fulltext, completed, priority }) => (
              <Task
                key={id}
                id={id}
                title={title}
                description={description}
                fulltext={fulltext}
                completed={completed}
                priority={priority.toLowerCase()}
              />
            )
          );
        }}
      </Query>
      <AddNewTask />
    </Container>
  );
};

export default Home;
