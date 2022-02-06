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
    getEditTodos: (state, action) => {
      const updateTodos = state.todoLists.map((todo) => {
        if (todo.id === action.payload.editId) {
          todo.name = action.payload.editName;
          todo.date = action.payload.editDate;
          todo.schedule = action.payload.editSchedule;
          todo.type = action.payload.editType;
          todo.description = action.payload.editDescription;
        }
        return todo;
      });
      state.todoLists = updateTodos;
    },
    getDeleteId: (state, action) => {
      const deleteTodo = state.todoLists.filter(
        (todo) => todo.id !== action.payload
      );
      state.todoLists = deleteTodo;
    },
  },
});

export const { getNewTodo, getEditTodos, getDeleteId } = todoSlice.actions;

export const selectTodos = (state) => state.todo;

export default todoSlice.reducer;
