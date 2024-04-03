import React from 'react';
import { useState, useEffect } from 'react';

const Hello = () => {
    const [username, setUsername] = useState('');

    useEffect(() => {
        const storedUsername = localStorage.getItem('username') || '';
        setUsername(storedUsername);
    }, []); 

    const handleInputChange = (e) => {
        const newUsername = e.target.value;
        localStorage.setItem('username', newUsername);
        setUsername(newUsername);
      };

    return (
        <section className="greeting">
        <h2 className="title">
            What's up, <input type="text" id="name" value={username} onChange={handleInputChange} placeholder="Name here"/>
        </h2>
       </section>
    );
};

export default Hello;