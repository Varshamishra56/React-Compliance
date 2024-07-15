import { useRef } from "react";
import { useState } from "react";
import { MdAddComment } from "react-icons/md";

function AddTodo({ onNewItem }) {
  const todoNameElement=useRef();
  const dueDateElement=useRef();


  const handleAddButton = (event) => {
    event.preventDefault();
    const todoName=todoNameElement.current.value;
    const dueDate=dueDateElement.current.value;
    todoNameElement.current.value="";
    dueDateElement.current.value="";
    onNewItem(todoName, dueDate);
  };

  return (
    <div className="container text-center">
      <div className="row The-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            ref={todoNameElement}
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement}/>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success The-button"
            onClick={handleAddButton}
          >
            <MdAddComment />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
