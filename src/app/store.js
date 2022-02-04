import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todoListsReducer from "../features/todoSlice";
import addTodoReducer from "../features/addtodo/addTodoSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoListsReducer,
    addTodo: addTodoReducer,
  },
});
