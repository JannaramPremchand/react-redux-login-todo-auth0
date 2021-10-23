import { Button } from 'react-bootstrap';
import React, { useRef } from "react";
import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";

const TodoItem = (props) => {
  const { item, updateTodo, removeTodo, completeTodo } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      //here 13 is key code for enter key
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };
  return (
    <>
  
    <li key={item.id} className="card my-2 container ">
      <input type='text' className="listinput" ref={inputRef} disabled={inputRef} defaultValue={item.item}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
        />
      <div className="btns">
        <Button onClick={() => changeFocus()}>
          {" "}
          <AiFillEdit />{" "}
        </Button>
        {item.completed === false && (
          <Button
           
            style={{ color: "green" }}
            onClick={() => completeTodo(item.id)}
          >
            <IoCheckmarkDoneSharp />
          </Button>
        )}
        <Button
         
          style={{ color: "red" }}
          onClick={() => removeTodo(item.id)}
        >
          {" "}
          <IoClose />
        </Button>{" "}
      </div>
      {item.completed && <span className="completed">done</span>}
     
    </li>

    </>
  );
};

export default TodoItem;