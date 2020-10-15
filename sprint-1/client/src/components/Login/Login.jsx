import React from 'react'
import './Login.scss'

function Login(props) {

    const { email, setEmail, password, setPassword, handleLogin, handleSignUp, hasAccount, setHasAccount, emailError, passwordError } = props;

    return (
        <div>
            <section className="login">
                <div className="login__container">
                <img className="login__logo"src={process.env.PUBLIC_URL + '/assets/logo1.svg'} alt="booklub logo"/>
                    <label className="login__label">username</label>
                    <input className="login__input" type="text" autofocus required value={email} onChange={(e) => setEmail(e.target.value)} style={{fontFamily: 'Roboto', fontSize: '14px'}}></input>
                    <p className="login__error">{emailError}</p>
                    <label className="login__label">password</label>
                    <input className="login__input" type="password" required value={password}onChange={(e) => setPassword(e.target.value)} style={{fontFamily: 'Roboto', fontSize: '14px'}}></input>
                <p className="login__error">{passwordError}</p>
                    <div className="login__button-container">
                        {hasAccount ? (
                            <>
                            <div className="login__button-div">
                             <button className="login__button" onClick={handleLogin}>sign in</button>
                             </div>
                             <div className="login__signup-container">
                             <p className="login__sign-up">don't have an account?<span onClick={() => setHasAccount(!hasAccount)}>sign up</span></p>
                             </div>
                            </>
                        ) : ( 
                            <>
                             <div className="login__button-div">
                            <button className="login__button" onClick={handleSignUp}>sign up</button>
                            </div>
                            <div className="login__signup-container">
                            <p className="login__sign-in">have an account?<span onClick={() => setHasAccount(!hasAccount)}>sign in</span></p>
                            </div>
                        </>     
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login;

