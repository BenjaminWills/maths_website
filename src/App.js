import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos' // storing the changes locally

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  },[]) // Loading from local storage once upon refresh

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos))
  },[todos]) // Saving to local storage

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name == '') return null
    setTodos(prevTodos => {
      return [ ... prevTodos, {id:uuidv4(),name:name,complete:false}]
    })
    todoNameRef.current.value = null // clears input
  }

  return (
    <>
      <TodoList todos={todos} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}> Add Todo</button>
      <button>clear complete</button>
      <div>0 todos left</div>
    </>
  )
}

export default App;
