import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";
import "./AddTaskForm.css";

let id = 0;

function AddTaskForm() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: id++,
        input,
      })
    );
    setInput("");
  };

  return (
    <div>
      <h2>Todo App</h2>
      <form className="add-task-form" onSubmit={handleSubmit}>
        <input
          className="task-inputbox"
          placeholder="Task.."
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          required
        />
        <button className="action-Button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTaskForm;
