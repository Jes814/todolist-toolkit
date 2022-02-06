import React from "react";
import AddTodo from "./features/addtodo/AddTodo";
import EditTodo from "./features/edittodo/editTodo";
import Todolist from "./features/Todolist";
import { selectEditTodo } from "./features/edittodo/editTodoSlice";
import { useSelector } from "react-redux";

function App() {
  const { editModalUI } = useSelector(selectEditTodo);
  return (
    <>
      <AddTodo />
      <Todolist />
      {editModalUI ? <EditTodo /> : ""}
    </>
  );
}

export default App;
