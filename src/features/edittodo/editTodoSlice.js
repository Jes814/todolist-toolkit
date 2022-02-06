import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editName: "",
  editDate: "",
  editSchedule: "",
  editType: "",
  editDescription: "",
  editId: "",
  editModalUI: false,
};

export const editTodoSlice = createSlice({
  name: "editTodo",
  initialState,
  reducers: {
    getEditId: (state, action) => {
      state.editId = action.payload.id;
      state.editModalUI = action.payload.modal;
    },
    setModalUI: (state, action) => {
      state.editModalUI = action.payload;
    },
    getEditName: (state, action) => {
      state.editName = action.payload;
    },
    getEditDate: (state, action) => {
      state.editDate = action.payload;
    },
    getEditSchedule: (state, action) => {
      state.editSchedule = action.payload;
    },
    getEditType: (state, action) => {
      state.editType = action.payload;
    },
    getEditDescription: (state, action) => {
      state.editDescription = action.payload;
    },
  },
});

export const {
  getEditId,
  setModalUI,
  getEditName,
  getEditDate,
  getEditSchedule,
  getEditType,
  getEditDescription,
} = editTodoSlice.actions;

export const selectEditTodo = (state) => state.editTodo;

export default editTodoSlice.reducer;
