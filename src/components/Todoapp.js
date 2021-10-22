import React from 'react';
import DisplayTodos from './DisplayTodos';
import Todos from './Todos';
import { motion } from "framer-motion";
import { Navbar } from 'react-bootstrap'

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
            <div className="App">
      <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        Todo App
      </motion.h1>
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
        <Todos />
        <DisplayTodos />
      </motion.div>
    </div>
        </div>
    )
}

export default Todoapp
