import React from 'react';
import './Login.scss';
// import { Link } from 'react-router-dom';

function Login(props) {

    const { email, setEmail, password, setPassword, handleLogin, handleSignUp, hasAccount, setHasAccount, emailError, passwordError, setFirstName, setLastName, lastName, firstName} = props;

    return (
        
        <div className="app">
            <section className="login">
                <div className="login__container">
                <img className="login__logo"src={process.env.PUBLIC_URL + '/assets/logo1.svg'} alt="booklub logo"/>
                    <div className="login__button-container">
                        {hasAccount ? (
                             <form className="login__form-signIn">
                             <label className="login__label">username</label>
                            <input className="login__input" type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)} style={{fontFamily: 'Roboto', fontSize: '14px'}}></input>
                            <p className="login__error">{emailError}</p>
                            <label className="login__label">password</label>
                            <input className="login__input" type="password" required value={password}onChange={(e) => setPassword(e.target.value)} style={{fontFamily: 'Roboto', fontSize: '14px'}}></input>
                        <p className="login__error">{passwordError}</p>
                            <div className="login__button-div">
                             <button className="login__button" onClick={handleLogin}>sign in</button>
                             </div>
                             <div className="login__signup-container">
                             <p className="login__sign-up">don't have an account?<span onClick={() => setHasAccount(!hasAccount)}>sign up</span></p>
                             </div>
                             </form>
                        ) : ( 
                            <form className="login__form-signUp">
                                <label className="login__label">first name</label>
                        <input className="login__input" type="text" autoFocus required value={firstName} onChange={(e) => setFirstName(e.target.value)} style={{fontFamily: 'Roboto', fontSize: '14px'}}></input>
                        <label className="login__label">last name</label>
                        <input className="login__input" type="text" autoFocus required value={lastName} onChange={(e) => setLastName(e.target.value)} style={{fontFamily: 'Roboto', fontSize: '14px'}}></input>
                        <label className="login__label">username (email)</label>
                        <input className="login__input" type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)} style={{fontFamily: 'Roboto', fontSize: '14px'}}></input>
                        <p className="login__error">{emailError}</p>
                        <label className="login__label">password</label>
                        <input className="login__input" type="password" required value={password}onChange={(e) => setPassword(e.target.value)} style={{fontFamily: 'Roboto', fontSize: '14px'}}></input>
                    <p className="login__error">{passwordError}</p>
                             <div className="login__button-div">
                                <button className="login__button" onClick={handleSignUp}>sign up</button>
                            </div>
                            <div className="login__signup-container">
                            <p className="login__sign-in">have an account?<span onClick={() => setHasAccount(!hasAccount)}>sign in</span></p>
                            </div>
                        </form>
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login;

