import React from "react";
import "./Style.css";
import DisplayTodos from "./DisplayTodos";
import Todos from "./Todos";
import { Navbar } from "react-bootstrap";

function Todoapp(props) {
  return (
    <div>
      <Navbar>
        <Navbar.Collapse className="justify-content-start">
          <Navbar.Text>
            Signed in as: <a href="#login">{props.person}</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <div className="App  justify-content-center">
        <h1> Todo App </h1>
        <Todos />
        <DisplayTodos />
      </div>
    </div>
  );
}

export default Todoapp;
