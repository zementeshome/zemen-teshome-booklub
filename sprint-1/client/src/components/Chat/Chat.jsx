import React, { useState } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
let socket;

function Chat() {
const [name, setName] = useState('');
const [room, setRoom] = useState('');
const ENDPOINT = 'localhost:800'

useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit('join', { name, room })
}, [ENDPOINT, location.search])

    return (
        <section className="chat">
            <h1>Hey</h1>
        </section>
        
    )
}

export default Chat;
