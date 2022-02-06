import { configureStore } from "@reduxjs/toolkit";
import todoListsReducer from "../features/todoSlice";
import addTodoReducer from "../features/addtodo/addTodoSlice";
import editTodoReducer from "../features/edittodo/editTodoSlice";

export const store = configureStore({
  reducer: {
    todo: todoListsReducer,
    addTodo: addTodoReducer,
    editTodo: editTodoReducer,
  },
});
