import React from 'react';

const Todo = ({task, option}) => {
    return (
        <section className="todo-list">
            <div className="list" id="todo-list">
                <div className="todo-item done">
                    <label>
                        <input type="checkbox"/>
                        <span className={option.option}></span>
                    </label>
                    <div className="todo-content">
                        <input type="text" value={task.task} readOnly/>
                    </div>
                    <div className="actions">
                        <button className="edit">Edit</button>
                        <button className="delete">Delete</button>
                    </div>
                </div>
            </div>
       </section>
    );
};

export default Todo;