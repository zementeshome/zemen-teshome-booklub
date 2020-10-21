import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Join.scss';

function Join() {
const [name, setName] = useState('');
const [room, setRoom] = useState('');

    return (
        <section className="join">
            <div className="join__outer-container">
            <div className="join__inner-container">
                <h1 className="join__header">Join</h1>
                <div>
                    <input placeholder="name" className="join__input" type="text" onChange={(e) => setName(e.target.value)} />
                    </div>
                <div>
                    <input placeholder="room" className="join__input" value={room} onChange={(e) => setRoom(e.target.value)} />
                    </div>
                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                <button className="join__button" type="submit">sign in</button>
                </Link>
            </div>
            </div>
        </section>
    )
}

export default Join;
