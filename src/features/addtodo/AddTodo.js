import React from "react";
import { todoTypes, todoSchedules } from "../Options";
import { useDispatch, useSelector } from "react-redux";
import {
  getTodoName,
  getTodoDate,
  getTodoSchedule,
  getTodoType,
  getTodoDescription,
  selectAddTodo,
} from "./addTodoSlice";
import { getNewTodo } from "../todoSlice";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

function AddTodo() {
  const dispatch = useDispatch();
  const { name, date, schedule, type, description } =
    useSelector(selectAddTodo);
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      name !== "" &&
      date !== "" &&
      description !== "" &&
      schedule !== "" &&
      type !== ""
    ) {
      dispatch(
        getNewTodo({
          id: uuidv4(),
          name: name,
          date: date,
          schedule: schedule,
          type: type,
          description: description,
        })
      );
      dispatch(getTodoName(""));
      dispatch(getTodoDate(""));
      dispatch(getTodoSchedule(""));
      dispatch(getTodoType(""));
      dispatch(getTodoDescription(""));
      Swal.fire({
        title: "Success!",
        text: "Todo added successfully!",
        icon: "success",
        confirmButtonText: "Close",
        confirmButtonColor: "#3085d6",
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Fields are required!",
        icon: "error",
        confirmButtonText: "Close",
        confirmButtonColor: "#3085d6",
      });
    }
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div className="flex justify-between items-center p-5">
        <div className="w-2/5">
          <label>Todo: </label>
          <input
            className="border-b-2 border-blue-300 w-full outline-none pt-4"
            placeholder="Todo name ..."
            onChange={(e) => dispatch(getTodoName(e.target.value))}
            value={name}
            type="text"
          />
        </div>
        <div className="w-2/5">
          <label>Todo Created :</label>
          <input
            className="border-b-2 border-blue-300 w-full outline-none pt-4"
            placeholder="Todo name ..."
            onChange={(e) => dispatch(getTodoDate(e.target.value))}
            value={date}
            type="date"
          />
        </div>
      </div>
      <div className="flex justify-between items-center p-5">
        <div className="w-2/5">
          <label>Todo Schedule:</label>
          <select
            className="border-b-2 border-blue-300 w-full outline-none pt-4"
            placeholder="Todo name ..."
            onChange={(e) => dispatch(getTodoSchedule(e.target.value))}
            value={schedule}
            type="text"
          >
            <option hidden>Choose schedule</option>
            {todoSchedules &&
              todoSchedules.map((schedule, index) => (
                <option value={schedule.value} key={index}>
                  {schedule.label}
                </option>
              ))}
          </select>
        </div>
        <div className="w-2/5">
          <label>Todo Types :</label>
          <select
            className="border-b-2 border-blue-300 w-full outline-none pt-4"
            placeholder="Todo name ..."
            onChange={(e) => dispatch(getTodoType(e.target.value))}
            value={type}
            type="text"
          >
            <option hidden>Choose type depends on todo</option>
            {todoTypes &&
              todoTypes.map((type, index) => (
                <option value={type.value} key={index}>
                  {type.label}
                </option>
              ))}
          </select>
        </div>
      </div>
      <div className="p-5">
        <label>Todo Description :</label>
        <textarea
          className="border-b-2 border-blue-300 w-full outline-none"
          onChange={(e) => dispatch(getTodoDescription(e.target.value))}
          value={description}
          placeholder="Description here ..."
        ></textarea>
      </div>
      <div className="p-5 flex justify-end">
        <input
          type="submit"
          value="Submit"
          className="border rounded-xl bg-green-700 text-white font-bold border-green-300 py-1 px-8"
        />
      </div>
    </form>
  );
}

export default AddTodo;
