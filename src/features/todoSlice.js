import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoLists: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    getNewTodo: (state, action) => {
      state.todoLists = [...state.todoLists, action.payload];
    },
  },
});

export const { getNewTodo } = todoSlice.actions;

export const selectTodos = (state) => state.todo;

export default todoSlice.reducer;
