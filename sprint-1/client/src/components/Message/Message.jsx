import React from 'react'
import ReactEmoji from 'react-emoji';

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
            <div className="message__container">
            <p className="message__sent-text">{trimmedName}</p>
            <div className="message__box backgroundBlue">
                <p className="message__text colorWhite">{ReactEmoji.emojify(text)}</p>
            </div>
            </div>
        </section>
        )
    : (
        <section className="message jusitfyStart">
        <div className="message__container">
        <div className="message__box backgroundLight">
            <p className="message__text colorDark">{ReactEmoji.emojify(text)}</p>
        </div>
        <p className="message__sent-text">{user}</p>
        </div>
    </section>
    )
  )
}

export default Message;
