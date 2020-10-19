import React from 'react';
import './Header.scss';
import { Link, useHistory } from 'react-router-dom';
import fire from '../../fire';

function Header() {
    
    let history = useHistory();

    const handleLogout = () => {
    fire.auth().signOut().then(() => {
        history.push('/');
    })
  };

    return (
       <section className="header">
           <img className="header__logo" src={process.env.PUBLIC_URL + '/assets/logo2.svg'} alt="booklub logo" alt=""/>
           <nav className="header__nav">
            <ul className="header__nav-list">
                <Link to="/home" style={{textDecoration: 'none', color: 'black'}}><li className="header__nav-list-item">home</li></Link>
                <Link to="/about" style={{textDecoration: 'none', color: 'black'}}><li className="header__nav-list-item">about</li></Link>
                <Link to="/klub" style={{textDecoration: 'none', color: 'black'}}><li className="header__nav-list-item">klub</li></Link>
                {/* <li className="header__nav-list-item">contact</li> */}
                <button className="header__logout" onClick={handleLogout}>logout</button>
            </ul>
           </nav>
       </section>
    )
}

export default Header;
