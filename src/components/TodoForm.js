import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");
    const [option, setOption] = useState('personal');


    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value, option);
        setValue('');
    }

    return (
        <section className="create-todo">
            <h3>CREATE A TODO</h3>
            <form className="TodoForm" onSubmit={handleSubmit}>
                <h4>What's on your todo list?</h4>
                <input type="text" className="todoInput" value={value} id="content" placeholder="e.g. get a milk" onChange={(e) => setValue(e.target.value)} />
                <h4>Pick a category</h4>
                <div className="options">
                    <label>
                        <input type="radio" name="option" id="option1" value="business" onChange={(e) => setOption(e.target.value)} />
                        <span className="bubble business"></span>
                        <div>Business</div>
                    </label>
                    <label value={option}>
                        <input type="radio" name="option" id="option2" value="personal" onChange={(e) => setOption(e.target.value)} />
                        <span className="bubble personal"></span>
                        <div>Personal</div>
                    </label>
                </div>
                <input type="submit" className="todo-btn" value="Add todo" />
            </form>
        </section>
    );
};

export default TodoForm;
