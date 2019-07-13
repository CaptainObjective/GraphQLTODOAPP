import React from "react";
import Container from "@material-ui/core/Container";

import Task from "../Task";
import AddNewTask from "../AddNewTask";

const Home = () => {
  return (
    <Container
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "2rem"
      }}
      maxWidth="md"
    >
      <Task />
      <AddNewTask />
    </Container>
  );
};

export default Home;
