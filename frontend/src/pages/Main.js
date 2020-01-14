import React from 'react';
import '../assets/css/Main.css'
import avatar from '../assets/img/avatar.jpg';


/**
 * 
 * @param {math} pega todos os parâmetros passado para a função 
 */
export default function Main({math}) {
    const id = math;
    console.log(id);
    
    return (
        <div className="main-container">
            <h3 className="main-tinder">Tinder</h3>
            <ul>
                <li>
                    <img src={avatar} alt="Avatar" height="200" width="200"/>
                    <footer>
                        <strong>Avatar, 25</strong>
                        <p>Engenheiro de Software, programador como profissão que mais ama e 
                        jogador de CS:GO nas horas vagas</p>
                    </footer>
                </li>
                <li>
                    <img src={avatar} alt="Avatar" height="200" width="200"/>
                    <footer>
                        <strong>Avatar, 25</strong>
                        <p>Engenheiro de Software, programador como profissão que mais ama e 
                        jogador de CS:GO nas horas vagas</p>
                    </footer>
                </li>
                <li>
                    <img src={avatar} alt="Avatar" height="200" width="200"/>
                    <footer>
                        <strong>Avatar, 25</strong>
                        <p>Engenheiro de Software, programador como profissão que mais ama e 
                        jogador de CS:GO nas horas vagas</p>
                    </footer>
                </li>
                <li>
                    <img src={avatar} alt="Avatar" height="200" width="200"/>
                    <footer>
                        <strong>Avatar, 25</strong>
                        <p>Engenheiro de Software, programador como profissão que mais ama e 
                        jogador de CS:GO nas horas vagas</p>
                    </footer>
                </li>
                <li>
                    <img src={avatar} alt="Avatar" height="200" width="200"/>
                    <footer>
                        <strong>Avatar, 25</strong>
                        <p>Engenheiro de Software, programador como profissão que mais ama e 
                        jogador de CS:GO nas horas vagas</p>
                    </footer>
                </li>
                <li>
                    <img src={avatar} alt="Avatar" height="200" width="200"/>
                    <footer>
                        <strong>Avatar, 25</strong>
                        <p>Engenheiro de Software, programador como profissão que mais ama e 
                        jogador de CS:GO nas horas vagas</p>
                    </footer>
                </li>
            </ul>
        </div>
    );
}