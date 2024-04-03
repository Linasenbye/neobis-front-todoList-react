import React from 'react';
import TodoForm from './TodoForm';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";
import Todo from './Todo';
uuidv4();

const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(storedTodos);
    }, []);

    const addTodo = (todo, option) => {
        const newTodo = {
            id: uuidv4(), 
            task: todo,
            option: option,
            done: false,
            createdAt: new Date().getTime()
        };
        setTodos([...todos, newTodo]);
        localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
    };

    const toggleTodo = (id) => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
        );
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    };

    const editTodo = (id, newTask) => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, task: newTask } : todo
        );
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    };

    const deleteTodo = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    };

    return (
        <div className="TodoWrapper">
            <TodoForm addTodo={addTodo}/>
            {todos.map(todo => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    toggleTodo={toggleTodo}
                    editTodo={editTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </div>
    );
};

export default TodoWrapper;
