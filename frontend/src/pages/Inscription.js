import React, { useState } from 'react';
import '../assets/css/Inscription.css';
import api from '../services/api';


export default function Inscription({history}) {
    const [username, setUsername] = useState('');


    async function handleIncription(e) {
        e.preventDefault();
        console.log(username);    
        const response = await api.post('/devs', {username} );

        
        const { _id } = response.data;

        console.log(_id);
        if(_id !== ''){
            alert('Adicionado com sucesso!');
        } else{ 
            alert('Não foi possível adicionar o: ' + username);
        }
        history.push('/');
    }

    return (
        <div className="inscription-container">
            <h1>Adicionar conta GitHub</h1>
            <form onSubmit={handleIncription}>
            <input  
                    placeholder="Adicione seu usuário do GitHub"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                /> 
                <button type="submit">Adicionar</button>
            </form>
        </div>
    )
}