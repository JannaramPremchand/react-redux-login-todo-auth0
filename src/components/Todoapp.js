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
        <div className="d-flex justify-content-between align-items-center ">
        <Todos />
        <DisplayTodos />
        </div>
        
      </div>
    </div>
  );
}

export default Todoapp;
