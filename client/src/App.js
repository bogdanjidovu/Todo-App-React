import React, { useState, useEffect } from "react";
import "./App.css";

import dayjs, { Dayjs } from "dayjs";

import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [date, setDate] = useState(dayjs());
  const [time, setTime] = useState(0);
  const [dateFormatted, setDateFormatted] = useState(dayjs().format("DD MMM"));

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      case "today":
        setFilteredTodos(todos.filter((todo) => todo.time === 0));
        break;
      case "later":
        setFilteredTodos(todos.filter((todo) => todo.time === 1));
        break;
      case "earlier":
        setFilteredTodos(todos.filter((todo) => todo.time === -1));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));

      todoLocal.map((item) => {
        if (dayjs().isSame(item.deadline, "day")) {
          item.time = 0;
        } else if (dayjs().isBefore(item.deadline, "day")) {
          item.time = 1;
        } else if (dayjs().isAfter(item.deadline, "day")) {
          item.time = -1;
        }

        return item;
      });

      todoLocal.sort((a, b) => {
        if (a.deadline > b.deadline) {
          return 1;
        } else {
          return -1;
        }
      });

      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>TODO</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        dateFormatted={dateFormatted}
        setDateFormatted={setDateFormatted}
      />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
