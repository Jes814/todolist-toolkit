import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  date: "",
  schedule: "",
  type: "",
  description: "",
};

export const addTodoSlice = createSlice({
  name: "addTodo",
  initialState,
  reducers: {
    getTodoName: (state, action) => {
      state.name = action.payload;
    },
    getTodoDate: (state, action) => {
      state.date = action.payload;
    },
    getTodoSchedule: (state, action) => {
      state.schedule = action.payload;
    },
    getTodoType: (state, action) => {
      state.type = action.payload;
    },
    getTodoDescription: (state, action) => {
      state.description = action.payload;
    },
  },
});

export const {
  getTodoName,
  getTodoDate,
  getTodoSchedule,
  getTodoType,
  getTodoDescription,
} = addTodoSlice.actions;

export const selectAddTodo = (state) => state.addTodo;

export default addTodoSlice.reducer;
