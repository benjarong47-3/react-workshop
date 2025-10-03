// src/TodoList.jsx
import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import { TodoContext } from './contexts/TodoContext';

function TodoList() { // รับ todos และ deleteTodo มาจาก props
    const { todos } = useContext(TodoContext);

    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
}

export default TodoList;