import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";
import {
  ActionButton,
  AddTaskFormContainer,
  H2,
  TaskInputForm,
} from "./AddTaskForm.style";
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
      <H2>Todo App</H2>
      <AddTaskFormContainer onSubmit={handleSubmit}>
        <TaskInputForm
          placeholder="Task.."
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          required
        />
        <ActionButton className="action-Button" type="submit">
          Add
        </ActionButton>
      </AddTaskFormContainer>
    </div>
  );
}

export default AddTaskForm;
