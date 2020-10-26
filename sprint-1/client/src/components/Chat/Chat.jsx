import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import InfoBar from '../InfoBar/InfoBar';
import MessageInput from '../MessageInput/MessageInput';
import DisplayMessages from '../DisplayMessages/DisplayMessages';
import TextBox from '../TextBox/TextBox';
import './Chat.scss';

let socket;

function Chat({ location }) {
const [name, setName] = useState('');
const [room, setRoom] = useState('');
const [users, setUsers] = useState('');
const [message, setMessage] = useState('');
const [messages, setMessages] = useState([]);
const ENDPOINT = 'localhost:8000';

useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit('join', { name, room }, () => {

    })
    return () => {
        socket.emit('disconnect');
        socket.off();
    }
}, [ENDPOINT, location.search]);

   useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
}, []);

    const sendMessage = (e) => {
        e.preventDefault();
        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }
    return (
        <section className="chat">
            <div className="chat__outer-container">
            <div className="chat__inner-container">
                <InfoBar room={room}/>
                <DisplayMessages messages={messages} name={name}/>
                <MessageInput message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
                <TextBox users={users}/>
            </div>
        </section>  
    )
}

export default Chat;
