import React from "react";
import { useSelector } from "react-redux";
import { ToDo } from "../store/todoSlice";
import ShowTask from "./ShowTask";

function ShowTodoList() {
  const list = useSelector((state: { todolist: ToDo[] }) => state.todolist);

  const renderList = list.map((item) => {
    return <ShowTask key={item.id} item={item} />;
  });

  return <div>{renderList}</div>;
}

export default ShowTodoList;
