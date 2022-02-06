import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTodos } from "./todoSlice";
import { typeIcons } from "./Options";
import moment from "moment";
import { getEditId } from "../features/edittodo/editTodoSlice";
import { getDeleteId } from "../features/todoSlice";

function Todolist() {
  const dispatch = useDispatch();
  const { todoLists } = useSelector(selectTodos);
  return (
    <div>
      <h2 className="text-center text-4xl pb-5">
        Todo Checklist
        <i className="fa fa-clipboard-check fill-current text-green-300 animate-pulse pl-4"></i>
      </h2>
      <div>
        {todoLists && todoLists.length > 0 ? (
          <div className="grid grid-cols-4 gap-4">
            {todoLists &&
              todoLists.map((todo) => {
                return (
                  <div
                    key={todo.id}
                    className="border-gray-200 border-2 shadow-xl m-4 p-3 rounded-lg relative"
                  >
                    <div>
                      {/* HOVER OPTIONS */}
                      <div className="cursor-pointer absolute inset-0 z-10 bg-cyan-200 text-center flex flex-col items-center h-full justify-center opacity-0 hover:opacity-100 bg-opacity-100 duration-300">
                        <div className="flex">
                          <div className="pr-5">
                            <button
                              onClick={() =>
                                dispatch(
                                  getEditId({ id: todo.id, modal: true })
                                )
                              }
                              className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-900"
                            >
                              <i className="fa fa-pen pr-2"></i>Edit
                            </button>
                          </div>
                          <div>
                            <button
                              onClick={() => dispatch(getDeleteId(todo.id))}
                              className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-900"
                            >
                              <i className="fa fa-trash pr-2"></i>Delete
                            </button>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h1 className="text-2xl font-bold">{todo.name}</h1>
                      </div>

                      <div className="py-5 font-semibold mb-20">
                        {todo.description.length > 10
                          ? todo.description.substring(0, 35) + "..."
                          : todo.description}
                      </div>

                      <div className="flex mb-5">
                        <div className="w-1/2">
                          <i className="fa fa-calendar mr-2 fill-current text-blue-500"></i>
                          {todo.schedule}
                        </div>

                        <div className="w-1/2">
                          {typeIcons(todo)}
                          {todo.type}
                        </div>
                      </div>
                    </div>

                    <div className="">
                      <p>
                        <i className="fa fa-calendar mr-2 fill-current text-green-300"></i>
                        {moment(todo.date).format("MMM D, YYYY")}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        ) : (
          <div className="text-center py-20 text-3xl text-gray-200">
            <i className="fa fa-calendar-check pr-2"></i>No Todos to show
          </div>
        )}
      </div>
    </div>
  );
}

export default Todolist;
