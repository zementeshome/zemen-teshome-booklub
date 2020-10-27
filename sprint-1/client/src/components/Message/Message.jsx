import React from 'react'
import ReactEmoji from 'react-emoji';
import './Message.scss';

const Message = ({ message: { user, text }, name }) => {
    let isSentByCurrentUser = false;
    const trimmedName = name.trim().toLowerCase();
    if(user === trimmedName) {
        isSentByCurrentUser = true;
    }
     return (
        isSentByCurrentUser
        ? (
        <section className="message justifyEnd">
            <p className="message__sent-text pr-10">{trimmedName}</p>
            <div className="message__box backgroundBlue">
                <p className="message__text colorWhite">{ReactEmoji.emojify(text)}</p>
            </div>
        </section>
        )
    : (
        <section className="message jusitfyStart">
        <div className="message__box backgroundLight">
            <p className="message__text colorDark">{ReactEmoji.emojify(text)}</p>
        </div>
        <p className="message__sent-text pl-10">{user}</p>
    </section>
    )
  )
}

export default Message;
