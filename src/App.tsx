import { useDispatch, useSelector } from "react-redux";
import AddTaskForm from "./components/AddTaskForm";
import ShowTodoList from "./components/ShowTodoList";
import { ToDo, deleteAll } from "./store/todoSlice";
import { useEffect } from "react";
import { AppContainer } from "./App.style";
import { ActionButton } from "./components/AddTaskForm.style";

function App() {
  const dispatch = useDispatch();

  const deleteAllHandler = () => {
    dispatch(deleteAll());
  };
  const list = useSelector((state: { todolist: ToDo[] }) => state.todolist);

  useEffect(() => {
    localStorage.setItem("localTodos", JSON.stringify(list));
  }, [list]);

  const deleteAllButton = (
    <ActionButton
      className="action-Button"
      style={{ backgroundColor: "rgb(165, 20, 17)", gap: "0.4rem" }}
      onClick={deleteAllHandler}
    >
      <svg
        style={{ width: "10px", marginRight: "0.5rem" }}
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z"
        ></path>
      </svg>
      Delete All
    </ActionButton>
  );

  return (
    <div>
      <AppContainer>
        <AddTaskForm />
        <div>{list && <ShowTodoList />}</div>
        <div>{list.length !== 0 && <div>{deleteAllButton}</div>}</div>
      </AppContainer>
    </div>
  );
}

export default App;
