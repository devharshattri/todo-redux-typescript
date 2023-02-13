import React, { useState } from "react";
import { ToDo, editTask } from "../store/todoSlice";
import { useDispatch } from "react-redux";
import { EditCancelButton, EditCardForm, EditInput } from "./EditTask.style";
import { ActionButton } from "./AddTaskForm.style";

type EditTaskProps = {
  item: ToDo;
  onSubmit: () => void;
};

function EditTask(props: EditTaskProps) {
  const [changeInput, setChangeInput] = useState(props.item.task);
  const dispatch = useDispatch();

  const handleEditSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      editTask({
        id: props.item.id,
        changeInput,
      })
    );
    props.onSubmit();
  };
  return (
    <div>
      <EditCardForm className="edit-card" onSubmit={handleEditSubmit}>
        <EditInput
          type="text"
          value={changeInput}
          onChange={(e) => setChangeInput(e.target.value)}
          required
        />
        <EditCancelButton
          type="button"
          className="edit-cancel-button"
          onClick={props.onSubmit}
        >
          <svg style={{ width: "10px" }} viewBox="0 0 320 512">
            <path
              fill="white"
              d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
            ></path>
          </svg>
        </EditCancelButton>
        <ActionButton className="action-Button" type="submit">
          Update
        </ActionButton>
      </EditCardForm>
    </div>
  );
}

export default EditTask;
