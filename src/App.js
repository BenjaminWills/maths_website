import React, { useState, useRef, useEffect } from "react";
import TodoList from "./Components/TodoList";
import { v4 as uuidv4 } from "uuid";
import Navbar from "./Components/Navbar";

const LOCAL_STORAGE_KEY = "todoApp.todos"; // storing the changes locally

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    setTodos(storedTodos);
  }, []); // Loading from local storage once upon refresh

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]); // Saving to local storage

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name == "") return null;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });
    todoNameRef.current.value = null; // clears input
  }

  function handleClearTodos() {
    const newTodos = todos.filter((todos) => !todos.complete);
    setTodos(newTodos);
  }

  return (
    <>
      <React.Fragment>
        <Navbar />
      </React.Fragment>
      <div>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
        <input ref={todoNameRef} type="text" />
        <button onClick={handleAddTodo}> Add Todo</button>
        <button onClick={handleClearTodos}>clear complete</button>
        <div>{todos.filter((todo) => !todo.complete).length}</div>
      </div>
    </>
  );
}

export default App;
