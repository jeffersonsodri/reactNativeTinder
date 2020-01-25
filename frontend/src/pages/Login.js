import React, { useState } from 'react';
import '../assets/css/Login.css';
import api from '../services/api'; 
import {Link} from 'react-router-dom'


export default function Login({history}) {
    const [username, setUsername] = useState('');
    
    async function handleSubmit(e) {
        e.preventDefault();

        const response = await api.post('/devs', {username});
        const { _id } = response.data;

        history.push(`/dev/${_id}`);
    }

    async function handleRegister(e){
        e.preventDefault();

        history.push(`/dev/inscription`);
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
        <form onSubmit={handleRegister} >
            <Link to="/dev/inscription">
                <button type="button" >Inscreva-se</button>
            </Link>
        </form>
        </div>
    );
}