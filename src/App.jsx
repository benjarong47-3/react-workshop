// src/App.jsx
import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { TodoContext } from './contexts/TodoContext';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'เรียนรู้ useContext', completed: true },
    { id: 2, text: 'ทำความเข้าใจ Prop Drilling', completed: false },
  ]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };


  const todoContextValue = {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
    editTodo,
  };

  return (
    <TodoContext.Provider value={todoContextValue}>
      <div className="app">
        <h1>My To-Do List (with Context)</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoContext.Provider>
  );
}

export default App;