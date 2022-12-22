import React, { useState, useRef } from 'react';
import TodoList from './TodoList';
import uuidv4 from 'uuidv4';

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

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
