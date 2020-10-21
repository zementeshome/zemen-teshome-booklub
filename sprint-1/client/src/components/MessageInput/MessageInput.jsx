import React from 'react'

function MessageInput({ message, setMessage, sendMessage}) {
    return (
        <section className="message">
            <form className="message__form">
        <input className="message__input" type="text" value={message} placeholder="type a message" onChange={({ target: { value } }) => setMessage(value)} onKeyPress={e => e.key === 'enter' ? sendMessage(e) : null}></input>
        <button className="message__button" onClick={(e) => sendMessage(e)}>send</button>
            </form>
        </section>
    )
}

export default MessageInput;
