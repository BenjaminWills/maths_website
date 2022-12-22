import React from 'react';
import TodoList from './TodoList';

function App() {
  return (
    <>
      <TodoList />
      <input type="text" />
      <button> Add Todo</button>
      <button>clear complete</button>
      <div>0 todos left</div>
    </>
  )
}

export default App;
