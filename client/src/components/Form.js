import React from "react";
import { useState } from "react";

import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Form = ({
  inputText,
  setInputText,
  todos,
  setTodos,
  setStatus,
  date,
  setDate,
  time,
  setTime,
  dateFormatted,
  setDateFormatted,
}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setDateFormatted(newDate.format("DD MMM"));

    if (dayjs().isBefore(newDate, "day")) {
      setTime(1);
    } else if (dayjs().isAfter(newDate, "day")) {
      setTime(-1);
    }
  };

  const submitTodoHandler = async (e) => {
    e.preventDefault();

    if (inputText !== "") {
      await setTodos([
        ...todos,
        {
          text: inputText,
          completed: false,
          id: Math.random() * 1000,
          deadline: date,
          time: time,
          deadlineFormatted: dateFormatted,
        },
      ]);

      setDateFormatted(dayjs().format("DD MMM"));
      setDate(dayjs());
      setTime(0);
      setInputText("");
    }
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
        placeholder="add a task"
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          className="todo-date"
          inputFormat="MM/DD/YYYY"
          value={date}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="today">Today</option>
          <option value="all">All</option>
          <option value="uncompleted">Uncompleted</option>
          <option value="completed">Completed</option>
          <option value="earlier">Earlier</option>
          <option value="later">Later</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
