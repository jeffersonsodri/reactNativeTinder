import React, {useEffect, useState} from 'react';
import '../assets/css/Main.css'
import api from '../services/api'
import {Link} from 'react-router-dom'

import like from '../assets/img/heart_77931.svg';
import dislike from '../assets/img/cancel_77947.svg';


/**
 * 
 * @param {match} pega todos os parâmetros passado para a função 
 */
export default function Main({ match }) {

    const [users, setUsers] = useState([]);

    useEffect( () => {
        async function loadUsers() {
            const response = await api.get('/devs', {
                headers: {
                    user: match.params.id,
                }
            })
            setUsers(response.data);
        }
        loadUsers();
    }, [match.params.id]);

    async function handleLike(id) {
        await api.post(`/devs/${id}/likes`, null, {
            headers: {
                user: match.params.id
            }
        });

        setUsers(users.filter(user => user._id !== id ));
    }
    
    async function handleDislike(id) {
        await api.post(`/devs/${id}/dislikes`, null, {
            headers: {
                user: match.params.id
            }
        });

        setUsers(users.filter(user => user._id !== id ));


    }
    return (
        <div className="main-container">
            <Link to="/">
                <h3 className="main-tinder">Tinder</h3>
            </Link>
            { users.length > 0 ? (
                <ul>
                {users.map(user => (
                    <li key={user._id}>
                        <img src={user.avatar} alt={user.name}/>
                        <footer>
                            <strong>{user.name}, {user.age}</strong>
                            <p>{user.bio}</p>
                        </footer>
                        <div className="buttons">
                            <button type="button">
                                <img src={dislike} alt="like" onClick={() => handleDislike(user._id)}/>
                            </button>
                            <button type="button">
                                <img src={like} alt="like" onClick={() => handleLike(user._id)}/>
                             </button>
                        </div>
                    </li>

                ) )}
            </ul>
            ) : (
                <div className="empty">
                    Acabou :(
                </div>
            )}
            
        </div>
    )
}