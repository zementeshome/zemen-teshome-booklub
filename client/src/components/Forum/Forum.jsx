import React from 'react'

function Forum() {
    return (
        <section className="forum">
            <div className="forum__panel">
                <h1 className="forum__header">Forum</h1>
                <textarea className="forum__input"></textarea><br />
                <button className="forum__button">post</button>
            </div>
        </section>
    )
}

export default Forum;

