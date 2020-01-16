import React, { useState } from 'react';
import '../assets/css/Inscription.css';
import api from '../services/api'



export default function Inscription({history}) {


    async function handleIncription({match}) {
        
    }

    return (
        <div className="inscription-container">
            <h1>Jefferson Entrou aqui</h1>
            <form>
                <input placeholder="Coloque seu usuário do GitHub"></input>
                <button type="submit">Adicionar</button>
            </form>
        </div>
    )
}