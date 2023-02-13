import React, { useState } from "react";
import { ToDo, deleteTask } from "../store/todoSlice";
import { useDispatch } from "react-redux";
import EditTask from "./EditTask";
import { CancelButton, EditButton, TaskCard } from "./ShowTask.style";

type ShowTaskProps = {
  item: ToDo;
};

function ShowTask(props: ShowTaskProps) {
  const [showEdit, setShowEdit] = useState(false);
  const dispatch = useDispatch();

  const deleteHandler = () => {
    const id = props.item.id;
    dispatch(deleteTask({ id }));
  };

  let content = (
    <TaskCard>
      {props.item.task}
      <div>
        <EditButton onClick={() => setShowEdit(!showEdit)}>
          <svg style={{ width: "15px" }} viewBox="0 0 512 512">
            <path
              fill="white"
              d="M490.3 40.4c21.9 21.87 21.9 57.33 0 79.2l-30 30.1-98-97.98 30.1-30.06c21.9-21.873 57.3-21.873 79.2 0l18.7 18.74zM172.4 241.7 339.7 74.34l98 97.96-167.4 167.3c-6.1 6.2-13.6 10.8-21.9 13.6l-88.8 29.6c-9.5 2.8-18.1.6-24.6-6.7-6.4-5.6-8.6-15.1-5.8-23.7l29.6-88.8c2.8-8.3 7.4-15.8 13.6-21.9zM192 63.1c17.7 0 32 15.23 32 32 0 18.6-14.3 32-32 32H96c-17.67 0-32 15.2-32 32V416c0 17.7 14.33 32 32 32h256c17.7 0 32-14.3 32-32v-96.9c0-16.8 14.3-32 32-32s32 15.2 32 32V416c0 53-43 96-96 96H96c-53.02 0-96-43-96-96V159.1c0-53 42.98-96 96-96h96z"
            />
          </svg>
        </EditButton>
        <CancelButton onClick={deleteHandler}>
          <svg style={{ width: "10px" }} viewBox="0 0 320 512">
            <path
              fill="white"
              d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
            ></path>
          </svg>
        </CancelButton>
      </div>
    </TaskCard>
  );
  const handleEditTaskSubmit = () => {
    setShowEdit(false);
  };
  if (showEdit) {
    content = <EditTask item={props.item} onSubmit={handleEditTaskSubmit} />;
  }

  return <div>{content}</div>;
}

export default ShowTask;
