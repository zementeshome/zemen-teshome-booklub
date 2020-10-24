import React from 'react';
import './MessageInput.scss';

function MessageInput({ message, setMessage, sendMessage}) {
    return (
        <section className="messageInput">
            <form className="messageInput__form">
        <input className="messageInput__send" type="text" value={message} placeholder="type a message" onChange={({ target: { value } }) => setMessage(value)} onKeyPress={e => e.key === 'enter' ? sendMessage(e) : null}></input>
        <button className="messageInput__button" onClick={(e) => sendMessage(e)}>send</button>
            </form>
        </section>
    )
}

export default MessageInput;
