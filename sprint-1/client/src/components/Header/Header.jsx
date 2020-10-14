import React from 'react';

function Header({handleLogout}) {
    return (
       <section className="header">
           <nav className="header__nav">
            <ul className="header__nav-list">
                <li className="header__nav-list-item">home</li>
                <li className="header__nav-list-item">about</li>
                <li className="header__nav-list-item">klub</li>
                <li className="header__nav-list-item">contact</li>
                <button className="header__logout" onClick={handleLogout}>logout</button>
            </ul>
           </nav>
       </section>
    )
}

export default Header;
