import React from "react";
import Container from "@material-ui/core/Container";
import Task from "../Task";

const Home = () => {
  return (
    <Container
      style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
      maxWidth="md"
    >
      <Task />
    </Container>
  );
};

export default Home;
