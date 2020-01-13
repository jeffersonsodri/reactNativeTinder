import React, { useState } from 'react';
import '../assets/css/Login.css';
import api from '../services/api'; 

export default function Login({history}) {
    const [username, setUsername] = useState('');
    
    async function handleSubmit(e) {
        e.preventDefault();
        console.log(username);

        const response = await api.post('/devs', { username});

        console.log(response);

        const { _id } = response.data;

        history.push(`/dev/${_id}`);
    }
    
    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} >
                <h3 className="login-tinder">Tinder</h3>
                <input  
                    placeholder="Digite seu usuário no GitHub"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                /> 
                <button type="submit">Entrar</button>
            </form> 
        </div>
    );
}