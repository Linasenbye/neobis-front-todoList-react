import React, { useState } from 'react';

const Todo = ({ todo, toggleTodo, editTodo, deleteTodo }) => {
    const [editing, setEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(todo.task);

    const handleEdit = () => {
        setEditing(true);
    };

    const handleBlur = () => {
        setEditing(false);
        if (editedTask !== todo.task) {
            editTodo(todo.id, editedTask);
        }
    };

    return (
        <section className="todo-list">
            <div className={`todo-item ${todo.done ? 'done' : ''}`}>
                <label>
                    <input
                        type="checkbox"
                        checked={todo.done}
                        onChange={() => toggleTodo(todo.id)}
                    />
                    <span className={`bubble ${todo.option}`}></span>
                </label>
                <div className="todo-content">
                    {editing ? (
                        <input
                            type="text"
                            value={editedTask}
                            onChange={(e) => setEditedTask(e.target.value)}
                            onBlur={handleBlur}
                            autoFocus
                        />
                    ) : (
                        <input
                            type="text"
                            value={todo.task}
                            readOnly
                        />
                    )}
                </div>
                <div className="actions">
                    <button className="edit" onClick={handleEdit}>Edit</button>
                    <button className="delete" onClick={() => deleteTodo(todo.id)}>Delete</button>
                </div>
            </div>
        </section>
    );
};

export default Todo;
