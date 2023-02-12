import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type ToDo = {
  id: number;
  task: string;
};

//Get Local Storage
const getLocaStorage = () => {
  let list = localStorage.getItem("localTodos");
  if (list) {
    return JSON.parse(list);
  }
  return [];
};

const initialState = getLocaStorage() as ToDo[];

const todoSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newtodo = {
        id: action.payload.id,
        task: action.payload.input,
      };
      state.push(newtodo);
    },
    deleteTask: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    editTask: (state, action) => {
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return { id: action.payload.id, task: action.payload.changeInput };
        }
        return task;
      });
    },
    deleteAll: (state, action: PayloadAction) => {
      return (state = []);
    },
  },
});

export const { addTodo, deleteTask, editTask, deleteAll } = todoSlice.actions;
export default todoSlice.reducer;
