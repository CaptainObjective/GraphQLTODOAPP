import React from "react";
import reactDom from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";

const root = document.querySelector("#root");

reactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  root
);
